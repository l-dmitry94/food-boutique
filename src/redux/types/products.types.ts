export interface IProduct {
    category: string;
    img: string;
    is10PercentOff: boolean;
    name: string;
    popularity: number;
    price: number;
    size: string;
    _id: string;
}

export interface IProducts {
    page: number;
    perPage: number;
    totalPages: number;
    results: IProduct[];
}

export interface IProductsState {
    products: IProduct[];
    isLoading: boolean;
    error: string | null;
}
