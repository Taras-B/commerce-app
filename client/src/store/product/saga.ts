import { takeEvery, call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { productsAPI } from '../../api/products'
import { EnumProductType, IFetchProductAction, IProduct } from './types'
import { productActions } from './actions'

function* fetchProductSaga({ payload }: IFetchProductAction) {
  try {
    const { data, status }: AxiosResponse<IProduct> = yield call(
      productsAPI.getProduct,
      payload
    )
    console.log(data)

    if (status === 200) {
      yield put(productActions.setProduct(data))
    }
  } catch (e) {
    //TODO: ADD error app
    console.log(e.response.data.message)
  }
}

export function* sagaProductWatcher() {
  yield takeEvery(EnumProductType.FETCH_PRODUCT, fetchProductSaga)
}
