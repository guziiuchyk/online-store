import React, {useState} from "react";
import styles from "./product.module.css"
import crossImg from "../../../assets/cross2-icon.svg"

const Product: React.FC = () => {

    const [count, setCount] = useState(1);

    const incrementCount = () => {
        if (count < 1000) {
            setCount(prevCount => prevCount + 1)
        }
    }

    const decrementCount = () => {
        if(count > 1){
            setCount(prevCount => prevCount - 1)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.image_wrapper}>
                <img
                    className={styles.img}
                    src="https://media.wired.com/photos/644c2a227b25a434b1f3bbe6/1:1/w_1282,h_1282,c_limit/Lenovo-X1-Carbon-Linux-Laptop-Gear.jpg"
                    alt=""/>
            </div>
            <div className={styles.info}>
                <div className={`heading3 ${styles.title}`}>Lorem ipsum.</div>
                <div className={`gold heading5 ${styles.price}`}>20,00$</div>
            </div>
            <div className={styles.amount}>
                <button onClick={decrementCount} className={styles.decrement}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount} className={styles.increment}>+</button>
            </div>
            <div>
                <button className={styles.delete}>
                    <img src={crossImg} alt="delete"/>
                </button>
            </div>
        </div>
    )
}

export default Product