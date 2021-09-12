import Category from "./Category";
import { useState, useEffect } from "react";
import Meals from './Meals';
import useStore from "../store";
import { URL } from '../api/hello'

const Categories = () => {

    const [categories, setCategories] = useState();
    const [category, setCategory] = useState();
    const { orderItems, addOrderItem, emptyOrderItems, deleteOrderItem } = useStore();

    const changeCategory = (id) => {
        setCategory(categories.categories[id-1]);
    };

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${URL}/menu`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                setCategories(result);
                setCategory(result.categories[0]);
            })
            .catch(error => console.log('error', error));
    }, []);

    return (
        <>
            <div className={`container categories${orderItems.length == 0 ? "":" move"}`}>
                {(!!categories) && (!!category) ? (
                    categories['categories']?.map((categ, i) => (
                        <Category
                        key={i}
                        category={categ}
                        changeCategory={changeCategory}
                        currentCategory={category}
                        />
                    ))
                ) : (
                    <h3>loading ...</h3>
                )}
            </div>
            {!!category ? (
                <Meals category={category}/>
            ) : (
                <div className={`container${orderItems.length == 0 ? "":" move"}`}>
                    <h3>Loading...</h3>
                </div>
            )}
            
        </>
    );
};

export default Categories;
