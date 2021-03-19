import { Action } from 'redux'

export interface IProductsItem {
  _id: string
  name: string
  price: number
  create: Date
  picture: string
  category: string
}

export interface IProductsState {
  products: IProductsItem[] | null
  isProducts: boolean
}

export enum EnumProductsType {
  FETCH_PRODUCTS = 'products/FETCH_PRODUCTS',
  SET_PRODUCTS = 'products/SET_PRODUCTS',
  FETCH_CREATE = 'products/FETCH_CREATE',
}

//* API POST products in user
export interface IFetchProductsAction extends Action<EnumProductsType> {
  type: EnumProductsType.FETCH_PRODUCTS
}
export interface ISetProductsAction extends Action<EnumProductsType> {
  type: EnumProductsType.SET_PRODUCTS
  payload: IProductsItem[]
}

export type ProductsActionType = IFetchProductsAction | ISetProductsAction
