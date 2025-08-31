
interface IPortfolio {
    id:string,
    date: number
    title_ru: string,
    description_ru: string,
    imgs: string[],
    tags: string[],
    git?: string
}

export type { IPortfolio }