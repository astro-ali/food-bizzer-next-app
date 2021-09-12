import Item from "./Item";
import { useState } from 'react';
import useStore from "../store";

const Meals = ({ category }) => {

    const [selected, setSelected] = useState(null);
    const { orderItems, addOrderItem, emptyOrderItems, deleteOrderItem } = useStore();

    const toggleSelected = (i) => {
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    }

    return (
        <div className={`container${orderItems.length == 0 ? "":" move"}`}>
            <div className="meals-info">
                <div className="meals-info-name">{category.categoryName}</div>
                <div className="meals-info-price">Price</div>
            </div>
            {!!category ? (
                category.item?.map((item, i) => (
                    <Item item={item} key={i} selected={selected} toggleSelected={toggleSelected} id={i} />
                ))
            ) : (
                <h3>loading...</h3>
            )}
        </div>
    )
}

export default Meals;
