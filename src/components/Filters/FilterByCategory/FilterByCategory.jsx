import { useState } from 'react';
import { addCategoryFilter } from '../../../redux/filters/filtersSlice';
import { fetchCategories } from 'services/food-boutique-api';
import ReactSelect from 'components/ReactSelect';

const FilterByCategory = () => {
    const [categories, setCategories] = useState([]);

    useState(() => {
        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories([...data, 'Show all']);
            } catch (error) {
                console.log(error.message);
            }
        };

        getCategories();
    }, []);

    return (
        <ReactSelect
            arr={categories}
            placeholder="Categories"
            action={addCategoryFilter}
        />
    );
};

export default FilterByCategory;
