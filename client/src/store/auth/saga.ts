import { AxiosResponse } from 'axios'
import { takeEvery, call, put } from 'redux-saga/effects'
import { authAPI } from '../../api/auth'
import { IResponseLogin } from '../../api/types'
import { authActions } from './actions'
import { EnumAuthType, IFetchLoginUserAction } from './types'

function* fetchAuthSaga({ payload }: IFetchLoginUserAction) {
  try {
    const user: AxiosResponse<IResponseLogin> = yield call(authAPI.login, payload)
    console.log(user)

    if (user) {
      window.localStorage.setItem('token', JSON.stringify(user.data.access_token))
      yield put(authActions.setDataAuth(user.data))
    }
  } catch (e) {
    console.log(e)
    // yield put(setLoadingAuth(LoadingAuthState.ERROR))
  }
}

export function* sagaAuthWatcher() {
  yield takeEvery(EnumAuthType.FETCH_LOGIN, fetchAuthSaga)
}
