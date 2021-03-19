import { Action } from 'redux'

export interface IProductInfo {
  title: string
  description: string
}

export interface ICategory {
  _id: string
  name: string
}

export interface IProduct {
  _id: string
  name: string
  price: number
  description: string
  create: Date
  picture: string
  category: string | ICategory
  productInfo: IProductInfo[]
}

export interface IProductState {
  product: IProduct | null
  isProduct: boolean
}

export enum EnumProductType {
  FETCH_PRODUCT = 'product/FETCH_PRODUCT',
  SET_PRODUCT = 'product/SET_PRODUCT',
  FETCH_CREATE_PRODUCT = 'product/FETCH_CREATE_PRODUCT',
}

//* API POST product in user
export interface IFetchProductAction extends Action<EnumProductType> {
  type: EnumProductType.FETCH_PRODUCT
  payload: string
}
export interface ISetProductAction extends Action<EnumProductType> {
  type: EnumProductType.SET_PRODUCT
  payload: IProduct
}

export type ProductActionType = IFetchProductAction | ISetProductAction
