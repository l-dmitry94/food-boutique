import { useEffect, useState } from 'react';

import CustomSelect from 'components/CustomSelect';

import { filterByCategory } from '../../../redux/filter/filter-slice';
import { fetchCategories } from 'api/products-api';
import { useAppDispatch } from '../../../hooks/store';

const FilterByCategories = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data: string[] = await fetchCategories();
                setCategories([...data, 'Show all']);
            } catch (error: unknown) {
                console.log(error);
            }
        };
        getCategories();
    }, []);

    return (
        <CustomSelect
            optionsArr={categories}
            placeholder="Categories"
            operation={(value: string) => dispatch(filterByCategory(value))}
        />
    );
};

export default FilterByCategories;
