import { takeEvery, call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { productsAPI } from '../../api/products'
import { EnumProductsType, IProductsItem } from './types'
import { productsActions } from './actions'

function* fetchProductsSaga() {
  try {
    const { data, status }: AxiosResponse<IProductsItem[]> = yield call(
      productsAPI.getProducts
    )
    console.log(data)

    if (status === 200) {
      yield put(productsActions.setData(data))
    }
  } catch (e) {
    //TODO: ADD error app
    console.log(e.response.data.message)
    // yield put(setLoadingProducts(LoadingProductsState.ERROR))
  }
}

export function* sagaProductsWatcher() {
  yield takeEvery(EnumProductsType.FETCH_PRODUCTS, fetchProductsSaga)
}
