import React, {useState} from 'react';
import PizzaBlock from "./PizzaBlock";

const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
       ]

    const onClickCategory = (index) => {
        setActiveIndex(index)
    }


    return (
        <div>
            <div className="categories">
                <ul>
                    <li onClick={() => onClickCategory(0)}
                        className={activeIndex === 0 ? 'active' : ''}>
                        All
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Categories;

