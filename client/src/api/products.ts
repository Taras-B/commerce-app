import { IProductsItem } from '../store/products/types'
import http from './index'
import { IResponseLogin } from './types'

export const productsAPI = {
  getProducts() {
    return http.get<IProductsItem[]>(`products`).then((data) => data)
  },
}
