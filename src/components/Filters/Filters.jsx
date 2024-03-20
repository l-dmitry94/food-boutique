import FilterByCategory from './FilterByCategory';
import FilterByKeyword from './FilterByKeyword';
import scss from './Filters.module.scss';

const Filters = () => {
    return (
        <section className={scss.section}>
            <p className={scss.title}>Filters:</p>

            <div className={scss.wrapper}>
                <FilterByKeyword />
                <FilterByCategory />
            </div>
        </section>
    );
};

export default Filters;
