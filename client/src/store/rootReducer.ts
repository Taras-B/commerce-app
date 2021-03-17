import { combineReducers } from 'redux'
import { authReducer } from './auth/reducer'
import { productsReducer } from './products/reducer'

import { IAuthState } from './auth/types'
import { IProductsState } from './products/types'

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
})

export interface RootState {
  auth: IAuthState
  products: IProductsState
}
