import styles from "./product.module.css"
import React from "react";
import {Link} from "react-router-dom";

const Product:React.FC = () => {

    return (
        <Link to={"/products/34"} className={styles.wrapper}>
            <div className={styles.product}>
                <div className={styles.image_wrapper}>
                    <img className={styles.image}
                         src={"https://media.wired.com/photos/644c2a227b25a434b1f3bbe6/1:1/w_1282,h_1282,c_limit/Lenovo-X1-Carbon-Linux-Laptop-Gear.jpg"}
                         alt=""/>
                    <button className={`${styles.image_button} body-large`}>ADD TO CART</button>
                </div>
                <div className={`heading3 ${styles.name}`}>Lorem ipsum dolor.</div>
                <div className={`heading4 ${styles.price}`}>354$</div>
            </div>
        </Link>
    )
}

export default Product;