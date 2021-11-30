export default interface Review {    
    id?: number,    
    userId: number,    
    mangaId: number,    
    description: string,
    rate: number,
    date?: string,
    mangaTitle?: string,
    mangaAuthor?: string,
    username?: string,
}