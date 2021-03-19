import { combineReducers } from 'redux'

import { authReducer } from './auth/reducer'
import { productsReducer } from './products/reducer'
import { productReducer } from './product/reducer'

import { IAuthState } from './auth/types'
import { IProductsState } from './products/types'
import { IProductState } from './product/types'

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  product: productReducer,
})

export interface RootState {
  auth: IAuthState
  products: IProductsState
  product: IProductState
}
