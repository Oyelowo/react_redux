import React from 'react';
import styles from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = (props) => {
    return (
        <div className={styles.pizzaImage}>
            <img src={PizzaImage} className={styles.PizzaImg}/>
        </div>
    )
}

export default pizzaImage;
