
const Item = ({ item }) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <button className="food-item">
            <div className="food-item-name">{item.itemName}</div>
            <div className="food-item-price">{`${numberWithCommas(item.itemPrice)} IQD`}</div>
        </button>
    )
}

export default Item;
