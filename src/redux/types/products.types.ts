export interface IProduct {
    category: string;
    img: string;
    is10PercentOff?: boolean;
    name: string;
    popularity: number;
    price: number;
    size: string;
    _id: string;
    desc?: string;
}

export interface IProducts {
    page: number;
    perPage: number;
    totalPages: number;
    results: IProduct[];
}

export interface IProductsState {
    products: IProduct[];
    product: IProduct | null;
    inCart: IProduct[];
    isLoading: boolean;
    error: string | null;
}
