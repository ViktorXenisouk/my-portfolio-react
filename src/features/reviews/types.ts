interface IReview {
    date: number;
    name: string;
    rate: number;
    text: string;
}

interface IReviewData {
    date:number,
    name_ru:string,
    name_en:string,
    rate:number,
    text_ru:string,
    text_en:string,
}

type SortOption = 'date' | 'rate'

type SortOrder = 'asc' | 'desc';

export type { IReview,IReviewData,SortOption,SortOrder }