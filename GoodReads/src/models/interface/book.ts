export interface Book {
  _id: string,
  ID: number,
  authorID: {firstName:String, lastName:String, _id:String},
  categoryID: {name: String, _id:String},
  name: string,
  avgRate?: number,
  rating?: number,
  cover?:number,
  shelve?:string,
  reviews?: Array<any>
}

