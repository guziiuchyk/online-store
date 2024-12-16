import Footer from "../../components/footer/footer.tsx";
import Header from "../../components/header/header.tsx";
import React, {useState} from "react";
import styles from "./product.module.css"

const Products: React.FC = () => {

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
        <>
            <Header/>
            <div className={styles.wrapper}>
                <div className={styles.image_wrapper}>
                    <img className={styles.img} src="https://b2c-contenthub.com/wp-content/uploads/2024/08/Framework-Laptop-13-Core-Ultra-1-open.jpg?quality=50&strip=all" alt=""/>
                </div>
                <div className={styles.info_wrapper}>
                    <div className={`heading2 ${styles.title}`}>Lorem ipsum</div>
                    <div className={`gold heading4 ${styles.price}`}>20,00$</div>
                    <div className={styles.review}>★★★★★ 1 customer review</div>
                    <div className={`${styles.description} heading5 light_gray`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                        delectus facilis ipsum nulla, placeat rem. Autem fugit natus omnis tenetur.
                    </div>
                    <div className={styles.add_to_cart_wrapper}>
                        <div className={styles.amount}>
                            <button onClick={decrementCount} className={styles.decrement}>-</button>
                            <span>{count}</span>
                            <button onClick={incrementCount} className={styles.increment}>+</button>
                        </div>
                        <button className={`${styles.add_to_cart_button} button-black`}>ADD TO CART</button>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Products;