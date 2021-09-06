

const Category = ({ category, changeCategory, currentCategory }) => {

    const clicked = ` ${(currentCategory.categoryId == category.categoryId) ? "active":""}`

    return (
        <div className="category">
            <button onClick={() => changeCategory(category.categoryId)} className={`category-btn${clicked}`} >{category.categoryName}</button>
        </div>
    )
}
export default Category;