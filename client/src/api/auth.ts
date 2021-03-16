import { ILoginPayload } from '../store/auth/types'
import http from './index'
import { IResponseLogin } from './types'

export const authAPI = {
  login(data: ILoginPayload) {
    return http.post<IResponseLogin>(`auth/login`, data).then((data) => data)
  },
}
