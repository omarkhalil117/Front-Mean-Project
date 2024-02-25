export interface Book {
  _id: string,
  ID: number,
  authorID?: string,
  categoryID?: string,
  name: string,
  avgRate?: number,
  rating?: number,
  cover?:number,
  shelve?:string,
  reviews?: Array<string>
}
