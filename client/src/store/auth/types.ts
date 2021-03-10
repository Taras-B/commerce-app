import { Action } from 'redux'

export interface IAuthUser {
  _id: number
  username: string
  email: string
}

export interface IAuthState {
  token: string | null
  isAuth: boolean
  user?: IAuthUser | null
  isLoading: LoadingAuthState
}

export enum LoadingAuthState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export enum EnumAuthType {
  FETCH_LOGIN = 'auth/FETCH_LOGIN',
  FETCH_SIGN_UP = 'auth/FETCH_SIGN_UP',
  SET_AUTH = 'auth/SET_AUTH',
  SET_TOKEN = 'auth/SET_TOKEN',
  SET_LOGOUT = 'auth/SET_LOGOUT',
  CURRENT_AUTH = 'auth/CURRENT_AUTH',
  SET_LOADING = 'auth/SET_LOADING',
}

interface ILoginPayload {
  email: string
  password: string
}
interface ISignUpPayload extends ILoginPayload {
  username: string
}
//* API POST auth in user
export interface IFetchLoginUserAction extends Action<EnumAuthType> {
  type: EnumAuthType.FETCH_LOGIN
  payload: ILoginPayload
}

export interface IFetchSignUpUserAction extends Action<EnumAuthType> {
  type: EnumAuthType.FETCH_SIGN_UP
  payload: ISignUpPayload
}
export interface ISetAuthAction extends Action<EnumAuthType> {
  type: EnumAuthType.SET_AUTH
  payload: IAuthUser
}
export interface ISetTokenAuthAction extends Action<EnumAuthType> {
  type: EnumAuthType.SET_TOKEN
  payload: string
}

//* Logout user
export interface ISetLogoutAction extends Action<EnumAuthType> {
  type: EnumAuthType.SET_LOGOUT
}

export interface ICurrentAuthAction extends Action<EnumAuthType> {
  type: EnumAuthType.CURRENT_AUTH
  payload: IAuthUser
}

export interface ISetAuthLoadingAction extends Action<EnumAuthType> {
  type: EnumAuthType.SET_LOADING
  payload: LoadingAuthState
}

export type AuthActionType =
  | ISetAuthAction
  | ISetLogoutAction
  | ISetAuthLoadingAction
  | ISetTokenAuthAction
  | ICurrentAuthAction
  | IFetchLoginUserAction
  | IFetchSignUpUserAction
