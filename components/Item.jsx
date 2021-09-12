import { useRef } from "react";
import useStore from "../store";

const Item = ({ item, selected, toggleSelected, id }) => {

    const { orderItems, addOrderItem, emptyOrderItems, deleteOrderItem } = useStore();

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const input_value = useRef();
    const total_price = useRef();

    const increament = () => {
        input_value.current.value = parseInt(input_value.current.value) + 1;
        let counter = input_value.current.value;
        let new_total_price = `${numberWithCommas(item.foodPrice * counter)} IQD`;
        total_price.current.innerHTML = new_total_price;
    }

    const decreament = () => {
        if(input_value.current.value == 1) return
        input_value.current.value = parseInt(input_value.current.value) - 1;
        let counter = input_value.current.value;
        let new_total_price = `${numberWithCommas(item.foodPrice * counter)} IQD`;
        total_price.current.innerHTML = new_total_price;
    }

    const handleChange = (e) => {
        // do nothing
        return;
    }

    const toggleDropDown = (id) => {
        toggleSelected(id);
    }

    const addToCart = () => {
        addOrderItem({
            itemName: item.foodName,
            itemPrice: item.foodPrice,
            amount: parseInt(input_value.current.value)
        });
    }

    return (
        <div className={`food${selected == id ? " food-show":""}`}>
            <button onClick={() => toggleDropDown(id)} className="food-item">
                <div className="food-item-name">{item.foodName}</div>
                <div className="food-item-price">{`${numberWithCommas(item.foodPrice)} IQD`}</div>
            </button>
            <div className={`dropdown-box${selected == id ? "":" hide"}`}>
                <div className="counter">
                    <button onClick={() => increament()} className="counter-item counter-btn">+</button>
                    <input className="counter-item counter-box" onChange={handleChange} type="text" value={1} ref={input_value}/>
                    <button onClick={() => decreament()} className="counter-item counter-btn">-</button>
                </div>
                    <div ref={total_price} className="total-price">
                        {`${numberWithCommas(item.foodPrice)} IQD`}
                    </div>
                <div className="add-to-cart">
                    <button onClick={() => addToCart()} className="add-to-cart-btn">Add</button>
                </div>
            </div>
        </div>
    )
}

export default Item;
