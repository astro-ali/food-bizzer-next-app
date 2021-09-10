import Category from "./Category";
import { items } from "../items";  //fake data
import { useEffect, useState } from "react";
import Meals from './Meals';

const Categories = () => {

    const [categories, setCategories] = useState(items);
    const [category, setCategory] = useState(items.foodCategories[0]);

    const changeCategory = (id) => {
        setCategory(categories.foodCategories[id]);
    };

    return (
        <>
            <div className="container categories">
                {!!categories ? (
                    categories['foodCategories']?.map((categ) => (
                        <Category
                        key={categ.categoryId}
                        category={categ}
                        changeCategory={changeCategory}
                        currentCategory={category}
                        />
                    ))
                ) : (
                    <h3>loading ...</h3>
                )}
            </div>
            <Meals category={category}/>
        </>
    );
};

export default Categories;
