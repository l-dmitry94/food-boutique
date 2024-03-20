import { useSelector } from 'react-redux';
import { selectKeywordFilter } from '../redux/filters/selectors';

const useFilters = () => {
    const keyword = useSelector(selectKeywordFilter);

    return { keyword };
};

export default useFilters;
