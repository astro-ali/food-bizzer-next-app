import Item from "./Item";
import { useState } from "react";

const Meals = ({ category }) => {


    return (
        <div className="container">
            <div className="meals-info">
                <div className="meals-info-name">{category.categoryName}</div>
                <div className="meals-info-price">Price</div>
            </div>
            <Item item={category.categoryItems[0]} />
            {/* {!!category ? (
                category.categoryItems?.map((item) => (
                    <Item item={item} key={item.itemId} />
                ))
            ) : (
                <h3>loading...</h3>
            )} */}
        </div>
    )
}

export default Meals;
