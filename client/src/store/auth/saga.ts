import { AxiosResponse } from 'axios'
import { takeEvery, call, put } from 'redux-saga/effects'
import { authAPI } from '../../api/auth'
import { IResponseLogin } from '../../api/types'
import { authActions } from './actions'
import { EnumAuthType, IAuthUser, IFetchLoginUserAction } from './types'

function* fetchAuthSaga({ payload }: IFetchLoginUserAction) {
  try {
    const { data, status }: AxiosResponse<IResponseLogin> = yield call(
      authAPI.login,
      payload
    )

    if (status === 201) {
      window.localStorage.setItem('token', JSON.stringify(data.access_token))
      yield put(authActions.setDataAuth(data.user))
    }
  } catch (e) {
    //TODO: ADD error app
    console.log(e.response.data.message)
    // yield put(setLoadingAuth(LoadingAuthState.ERROR))
  }
}
function* fetchAuthCurrentUserSaga() {
  try {
    const { data, status }: AxiosResponse<IAuthUser> = yield call(authAPI.getUser)

    if (status === 200) {
      yield put(authActions.setDataAuth(data))
    }
  } catch (e) {
    //TODO: ADD error app
    console.log(e.response.data.message)
    // yield put(setLoadingAuth(LoadingAuthState.ERROR))
  }
}

export function* sagaAuthWatcher() {
  yield takeEvery(EnumAuthType.FETCH_LOGIN, fetchAuthSaga)
  yield takeEvery(EnumAuthType.FETCH_CURRENT_USER, fetchAuthCurrentUserSaga)
}
