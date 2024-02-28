export interface Books {
      _id: String,
      name: String,
      avgRate: Number,
      rating: Number
      cover: String
      shelve: String
      categoryID:{
            ID:string
      },
      authorID:{
            ID:string
      }
}
