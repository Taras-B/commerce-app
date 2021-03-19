import {
  EnumProductType,
  IFetchProductAction,
  IProduct,
  ISetProductAction,
} from './types'

export const productActions = {
  fetchProduct: (payload: string): IFetchProductAction => ({
    type: EnumProductType.FETCH_PRODUCT,
    payload,
  }),

  setProduct: (payload: IProduct): ISetProductAction => ({
    type: EnumProductType.SET_PRODUCT,
    payload,
  }),
}
