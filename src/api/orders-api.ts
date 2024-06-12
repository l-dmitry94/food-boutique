import { instance } from './products-api';

interface IProductOrder {
    productId: string;
    amount: number;
}

export interface IOrder {
    email: string;
    products: IProductOrder[];
}

export const fetchOrders = async (body: IOrder) => {
    console.log(body);
    const response = await instance.post('/orders', body);
    return response.data;
};
