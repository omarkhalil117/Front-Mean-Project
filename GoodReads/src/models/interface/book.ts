export interface Book {
  map(arg0: (el: any) => any): Book;
  _id: string,
  ID: number,
  authorID: {firstName:String, lastName:String, _id:String},
  categoryID: {name: String, _id:String},
  name: string,
  avgRate?: number,
  rating?: number,
  cover?:string,
  shelve?:string,
  reviews?: Array<any>
}
