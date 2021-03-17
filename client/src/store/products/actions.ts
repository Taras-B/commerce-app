import {
  EnumProductsType,
  IFetchProductsAction,
  IProductsItem,
  ISetProductsAction,
} from './types'

export const productsActions = {
  fetchProducts: (): IFetchProductsAction => ({
    type: EnumProductsType.FETCH_PRODUCTS,
  }),

  setData: (payload: IProductsItem[]): ISetProductsAction => ({
    type: EnumProductsType.SET_PRODUCTS,
    payload,
  }),
}
