import Header from "../../components/header/header.tsx";
import Footer from "../../components/footer/footer.tsx";
import React from "react";
import styles from "./cart.module.css"
import Product from "./product/product.tsx";

const Cart: React.FC = () => {

    const products:number[] = [1]

    return (
        <>
            <Header/>
            <div className={`heading1 ${styles.title}`}>Shopping Cart</div>
            {products.length > 0 ?
                <>
                    <Product/>
                    <button className={`button-black ${styles.buy_button}`}>BUY</button>
                </> :
                <div className={styles.empty_cart_wrapper}>
                    <div className={`heading2 ${styles.title}`}>Cart is empty</div>
                    <div className={`heading3 light_gray ${styles.description}`}>Go to the store and add items to the cart.</div>
                    <button className={`button-black ${styles.store_button}`}>STORE</button>
                </div>
            }
            <Footer/>
        </>
    )
}

export default Cart