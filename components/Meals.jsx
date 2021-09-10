import Item from "./Item";

const Meals = ({ category }) => {


    return (
        <div className="container">
            <div className="meals-info">
                <div className="meals-info-name">{category.categoryName}</div>
                <div className="meals-info-price">Price</div>
            </div>
            {!!category ? (
                category.categoryItems?.map((item) => (
                    <Item item={item} key={item.itemId} />
                ))
            ) : (
                <h3>loading...</h3>
            )}
        </div>
    )
}

export default Meals;
