import { useSelector } from 'react-redux';

import { selectFilter } from '../redux/filter/filter-selectors';

const useFilter = () => {
    return useSelector(selectFilter);
};

export default useFilter;
