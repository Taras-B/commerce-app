import { combineReducers } from 'redux'
import { authReducer } from './auth/reducer'
import { IAuthState } from './auth/types'

export const rootReducer = combineReducers({
  auth: authReducer,
})

export interface RootState {
  auth: IAuthState
}
