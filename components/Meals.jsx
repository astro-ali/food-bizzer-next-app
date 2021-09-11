import Item from "./Item";
import { useState } from 'react';

const Meals = ({ category }) => {

    const [selected, setSelected] = useState(null);

    const toggleSelected = (i) => {
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    }

    return (
        <div className="container move">
            <div className="meals-info">
                <div className="meals-info-name">{category.categoryName}</div>
                <div className="meals-info-price">Price</div>
            </div>
            {!!category ? (
                category.categoryItems?.map((item, i) => (
                    <Item item={item} key={item.itemId} selected={selected} toggleSelected={toggleSelected} id={i} />
                ))
            ) : (
                <h3>loading...</h3>
            )}
        </div>
    )
}

export default Meals;
