import scss from './ProductsNotFound.module.scss';

const ProductsNotFound = () => {
    return (
        <div className={scss.notFound}>
            <h3 className={scss.notFoundTitle}>
                Nothing was found for the selected{' '}
                <span className={scss.notFoundTitleColor}>filters...</span>
            </h3>
            <p className={scss.notFoundTitleDescription}>
                Try adjusting your search parameters or browse our range by
                other criteria to find the perfect product for you.
            </p>
        </div>
    );
};

export default ProductsNotFound;
