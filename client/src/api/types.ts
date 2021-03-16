import { IAuthUser } from '../store/auth/types'

export interface IResponseLogin {
  access_token: string
  user: IAuthUser
}
