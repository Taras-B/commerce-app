import { IProductsItem } from '../store/products/types'
import http from './index'

export const productsAPI = {
  getProducts() {
    return http.get<IProductsItem[]>(`products`).then((data) => data)
  },
}
