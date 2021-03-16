import { AxiosResponse } from 'axios'
import { takeEvery, call, put } from 'redux-saga/effects'
import { authAPI } from '../../api/auth'
import { IResponseLogin } from '../../api/types'
import { authActions } from './actions'
import {
  EnumAuthType,
  IAuthUser,
  IFetchLoginUserAction,
  IFetchSignUpUserAction,
} from './types'

function* fetchAuthLoginSaga({ payload }: IFetchLoginUserAction) {
  try {
    const { data, status }: AxiosResponse<IResponseLogin> = yield call(
      authAPI.login,
      payload
    )

    if (status === 201) {
      window.localStorage.setItem('token', JSON.stringify(data.access_token))
      yield put(authActions.setToken(data.access_token))
      yield put(authActions.setDataAuth(data.user))
    }
  } catch (e) {
    //TODO: ADD error app
    console.log(e.response.data.message)
    // yield put(setLoadingAuth(LoadingAuthState.ERROR))
  }
}
function* fetchAuthSignUpSaga({ payload }: IFetchSignUpUserAction) {
  try {
    const { data, status }: AxiosResponse<IResponseLogin> = yield call(
      authAPI.signUp,
      payload
    )
    console.log(data)

    if (status === 201) {
      window.localStorage.setItem('token', JSON.stringify(data.access_token))
      yield put(authActions.setToken(data.access_token))

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
    const data: AxiosResponse<IAuthUser> = yield call(authAPI.getUser)

    if (data.status === 200 && data.data !== undefined) {
      yield put(authActions.setDataAuth(data.data))
    }
  } catch (e) {
    //TODO: ADD error app
    console.log(e)
  }
}

export function* sagaAuthWatcher() {
  yield takeEvery(EnumAuthType.FETCH_LOGIN, fetchAuthLoginSaga)
  yield takeEvery(EnumAuthType.FETCH_SIGN_UP, fetchAuthSignUpSaga)
  yield takeEvery(EnumAuthType.FETCH_CURRENT_USER, fetchAuthCurrentUserSaga)
}
