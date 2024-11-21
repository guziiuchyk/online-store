import React from "react";
import styles from "./home.module.css"
import Header from "../../components/header/header.tsx";
import Footer from "../../components/footer/footer.tsx";
import Product from "../../components/product/product.tsx";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            <Footer/>
        </>
    )
}

export default Home;