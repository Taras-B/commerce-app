import { ProductActionType, EnumProductType, IProductState } from './types'

const initialState: IProductState = {
  isProduct: false,
  product: null,
}

export const productReducer = (
  state = initialState,
  action: ProductActionType
): IProductState => {
  switch (action.type) {
    case EnumProductType.SET_PRODUCT:
      return { ...state, isProduct: true, product: action.payload }

    default:
      return state
  }
}
