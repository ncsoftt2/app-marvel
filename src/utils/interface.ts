export interface ICommonData{
    name: string
    title: string
    description: string
    thumbnail: {
        path: string
        extension: string
    }
    prices: [{price: number}],
    pageCount: number
    textObjects?: {
        language: string
    }
}

export interface List  {
    id: number
    name: string
    title?:string
    thumbnail: {
        path: string
        extension: string
    }
}