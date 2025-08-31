interface IReview {
    date: number;
    name: string;
    rate: number;
    text: string;
}

type SortOption = 'date' | 'rate'

type SortOrder = 'asc' | 'desc';

export type { IReview,SortOption,SortOrder }