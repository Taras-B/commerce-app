import { IProductsItem } from '../store/products/types'
import { IProduct } from '../store/product/types'
import http from './index'

export const productsAPI = {
  getProducts() {
    return http.get<IProductsItem[]>(`products`).then((data) => data)
  },
  getProduct(id: string) {
    return http.get<IProduct>(`products/${id}`).then((data) => data)
  },
}
