import { useSelector } from 'react-redux';

import {
    selectError,
    selectIsLoading,
    selectSubscription,
} from '../redux/subscription/subscription-selectors';

const useSubscription = () => {
    const subscription = useSelector(selectSubscription);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    return { subscription, error, isLoading };
};

export default useSubscription;
