import {
  EnumAuthType,
  IAuthUser,
  ICurrentAuthAction,
  IFetchLoginUserAction,
  IFetchSignUpUserAction,
  ILoginPayload,
  ISetAuthAction,
  ISetTokenAuthAction,
  ISignUpPayload,
} from './types'

export const authActions = {
  fetchLogin: (payload: ILoginPayload): IFetchLoginUserAction => ({
    type: EnumAuthType.FETCH_LOGIN,
    payload,
  }),
  fetchSignUp: (payload: ISignUpPayload): IFetchSignUpUserAction => ({
    type: EnumAuthType.FETCH_SIGN_UP,
    payload,
  }),
  setDataAuth: (payload: IAuthUser): ISetAuthAction => ({
    type: EnumAuthType.SET_AUTH,
    payload,
  }),
  setToken: (payload: string): ISetTokenAuthAction => ({
    type: EnumAuthType.SET_TOKEN,
    payload,
  }),
  setCurrentUser: (payload: IAuthUser): ICurrentAuthAction => ({
    type: EnumAuthType.CURRENT_AUTH,
    payload,
  }),
}
