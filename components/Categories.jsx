import Category from './Category';
import { items } from "../items";
import { useStore } from '../store'; 
import { useEffect } from 'react';

const Categories = () => {

    const { Items, setItems } = useStore();

    useEffect( () => {
        setItems(items);
    }, []);


    const categoriesNames = items.foodCategories;
    return (
        <div className="container categories">
            {categoriesNames.map((categ) => {
                return <Category key={categ.categoryId} category={categ} classes="category-btn" />
            })}
        </div>
    )
}

export default Categories;
