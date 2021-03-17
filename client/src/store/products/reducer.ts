import { ProductsActionType, EnumProductsType, IProductsState } from './types'

const initialState: IProductsState = {
  isProducts: false,
  products: [],
}

export const productsReducer = (
  state = initialState,
  action: ProductsActionType
): IProductsState => {
  switch (action.type) {
    case EnumProductsType.SET_PRODUCTS:
      return { ...state, isProducts: true, products: action.payload }

    default:
      return state
  }
}
