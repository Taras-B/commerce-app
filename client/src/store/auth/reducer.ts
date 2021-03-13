import { AuthActionType, EnumAuthType, IAuthState, LoadingAuthState } from './types'

const initialState: IAuthState = {
  token: localStorage.getItem('token') || null,
  isAuth: false,
  isLoading: LoadingAuthState.LOADED,
  user: null,
}

export const authReducer = (state = initialState, action: AuthActionType) => {
  switch (action.type) {
    case EnumAuthType.SET_TOKEN:
      return { ...state, token: action.payload }
    case EnumAuthType.SET_LOGOUT:
      return { ...state, token: null, isAuth: false, user: null }
    case EnumAuthType.SET_AUTH:
      return { ...state, isAuth: true, user: action.payload }

    default:
      return state
  }
}
