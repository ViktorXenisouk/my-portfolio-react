
interface IPortfolio {
    id:string,
    date: number
    title: string,
    description: string,
    imgs: string[],
    tags: string[],
    git?: string
}

interface IPortfolioData {
    id:string,
    date: number
    title_ru: string,
        title_en: string,
    description_ru: string,
        description_en: string,
    imgs: string[],
    tags: string[],
    git?: string
}

export type { IPortfolio,IPortfolioData }