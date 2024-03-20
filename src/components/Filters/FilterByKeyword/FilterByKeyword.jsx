import { icons } from 'assets/icons';
import scss from './FilterByKeyword.module.scss';
import { useDispatch } from 'react-redux';
import { addKeywordFilter } from '../../../redux/filters/filtersSlice';

const FilterByKeyword = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.currentTarget;

        if (!form.search.value) {
            return;
        }

        dispatch(addKeywordFilter(form.search.value.toLowerCase()));
    };

    return (
        <form className={scss.form} onSubmit={handleSubmit}>
            <input
                type="text"
                name="search"
                placeholder="Search for anything"
                className={scss.input}
            />
            <button type="submit" className={scss.button}>
                <svg className={scss.icon}>
                    <use href={`${icons}#icon-search`}></use>
                </svg>
            </button>
        </form>
    );
};

export default FilterByKeyword;
