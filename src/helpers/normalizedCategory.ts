const normalizedCategory = (category: string) => {
    category = category.replace('_&_', ' / ');
    category = category.replace('_', ' ');

    return category;
};

export default normalizedCategory;
