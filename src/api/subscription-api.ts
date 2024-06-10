import { IInputs } from 'components/Footer/FooterForm/FooterForm';
import { instance } from './products-api';

export const fetchSubscription = async ({ email }: IInputs) => {
    const response = await instance.post('/subscription', {
        email,
    });

    return response.data;
};
