import { all } from 'redux-saga/effects'
import { sagaAuthWatcher } from './auth/saga'

export function* rootSaga() {
  yield all([sagaAuthWatcher()])
}
