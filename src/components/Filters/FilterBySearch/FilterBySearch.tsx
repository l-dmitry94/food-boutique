import { SubmitHandler, useForm } from 'react-hook-form';

import { icons } from 'assets/icons';
import { useAppDispatch } from '../../../hooks/store';
import { filterByKeyword } from '../../../redux/filter/filter-slice';

import scss from './FilterBySearch.module.scss';

interface IInputs {
    search: string;
}

const FilterBySearch = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm<IInputs>();

    const onSubmit: SubmitHandler<IInputs> = ({ search }) => {
        if (search) dispatch(filterByKeyword(search));
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={scss.searchForm}
            autoComplete="off"
        >
            <input
                type="text"
                {...register('search')}
                placeholder="Search for anything"
                className={scss.searchInput}
            />

            <button type="submit" className={scss.searchButton}>
                <svg className={scss.searchIcon}>
                    <use href={`${icons}#icon-search`}></use>
                </svg>
            </button>
        </form>
    );
};

export default FilterBySearch;
