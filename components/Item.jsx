import { useRef } from "react";

const Item = ({ item }) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const input_value = useRef();
    const total_price = useRef();

    const increament = () => {
        input_value.current.value = parseInt(input_value.current.value) + 1;
        let counter = input_value.current.value;
        let new_total_price = `${numberWithCommas(item.itemPrice * counter)} IQD`;
        total_price.current.innerHTML = new_total_price;
    }

    const decreament = () => {
        if(input_value.current.value == 1) return
        input_value.current.value = parseInt(input_value.current.value) - 1;
        let counter = input_value.current.value;
        let new_total_price = `${numberWithCommas(item.itemPrice * counter)} IQD`;
        total_price.current.innerHTML = new_total_price;
    }

    return (
        <div className="food">
            <button className="food-item">
                <div className="food-item-name">{item.itemName}</div>
                <div className="food-item-price">{`${numberWithCommas(item.itemPrice)} IQD`}</div>
            </button>
            <div className="dropdown-box">
                <div className="counter">
                    <button onClick={() => increament()} className="counter-item counter-btn">+</button>
                    <input className="counter-item counter-box" type="text" value={1} ref={input_value}/>
                    <button onClick={() => decreament()} className="counter-item counter-btn">-</button>
                </div>
                    <div ref={total_price} className="total-price">
                        {`${numberWithCommas(item.itemPrice)} IQD`}
                    </div>
                <div className="add-to-cart">
                    <button className="add-to-cart-btn">Add</button>
                </div>
            </div>
        </div>
    )
}

export default Item;
