import { useSelector } from 'react-redux';

import {
    selectError,
    selectIsLoading,
    selectOrders,
} from '../redux/orders/orders-selectors';

const useOrders = () => {
    const orders = useSelector(selectOrders);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    return { orders, error, isLoading };
};

export default useOrders;
