import Item from "./Item"

const Meals = () => {
    return (
        <div className="container">
            <div className="meals-info">
                <div className="meals-info-name">Hot Drinks</div>
                <div className="meals-info-price">Price</div>
            </div>
            <Item />
        </div>
    )
}

export default Meals;
