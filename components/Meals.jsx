import Item from "./Item"
import { useState, useEffect } from "react";
import { items } from "../items";

const Meals = ({ category }) => {

    return (
        <div className="container">
            <div className="meals-info">
                <div className="meals-info-name">Hot Drinks</div>
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
