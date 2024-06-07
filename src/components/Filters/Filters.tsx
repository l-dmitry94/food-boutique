import { useEffect } from 'react';

import Container from 'components/Container';
import FilterBySearch from './FilterBySearch';
import FilterByCategories from './FilterByCategories';

import { resetFilter } from '../../redux/filter/filter-slice';
import { useAppDispatch } from '../../hooks/store';

import scss from './Filters.module.scss';

const Filters = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetFilter());
    }, [dispatch]);

    return (
        <section className={scss.filtersSection}>
            <Container>
                <p className={scss.filtersTitle}>Filters:</p>

                <div className={scss.filtersWrapper}>
                    <FilterBySearch />
                    <FilterByCategories />
                </div>
            </Container>
        </section>
    );
};

export default Filters;
