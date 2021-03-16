import { IAuthUser } from '../store/auth/types'

export interface IResponseLogin extends IAuthUser {
  access_token: string
}
