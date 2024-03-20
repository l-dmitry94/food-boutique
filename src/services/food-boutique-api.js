import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://food-boutique.b.goit.study/api',
});

export const fetchCategories = async () => {
    const response = await instance.get('/products/categories');
    return response.data;
};
