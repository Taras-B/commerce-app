import { takeEvery, call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { productsAPI } from '../../api/products'
import { EnumProductsType, IProductsItem } from './types'

function* fetchProductsSaga() {
  try {
    const { data, status }: AxiosResponse<IProductsItem[]> = yield call(
      productsAPI.getProducts
    )
    console.log(data)

    if (status === 200) {
      //   yield put(productsActions.setToken(data.access_token))
      //   yield put(productsActions.setDataProducts(data.user))
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
