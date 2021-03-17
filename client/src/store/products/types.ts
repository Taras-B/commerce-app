import { Action } from 'redux'

export interface IProductInfo {
  title: string
  description: string
}

export interface ICategory {
  _id: string
  name: string
}

export interface IProductsItem {
  _id: string
  name: string
  price: number
  create: Date
  picture: string
  category: string
}
export interface IProduct {
  name: string
  price: number
  description: string
  create: Date
  picture: string
  category: string | ICategory
  productInfo: IProductInfo[]
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
