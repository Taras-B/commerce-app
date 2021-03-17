import { all } from 'redux-saga/effects'
import { sagaAuthWatcher } from './auth/saga'
import { sagaProductsWatcher } from './products/saga'

export function* rootSaga() {
  yield all([sagaAuthWatcher(), sagaProductsWatcher()])
}
