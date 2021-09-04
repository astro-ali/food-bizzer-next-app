

const Category = ({ category, classes }) => {
    return (
        <div className="category">
            <button href="#" className={classes} >{category.categoryName}</button>
        </div>
    )
}

export default Category;