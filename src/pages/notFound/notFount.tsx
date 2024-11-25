import React from "react";
import styles from "./notFound.module.css"
import Header from "../../components/header/header.tsx";
import Footer from "../../components/footer/footer.tsx";

const NotFound: React.FC = () => {
    return (
        <>
            <Header/>
            <div className={styles.wrapper}>

            </div>
            <Footer/>
        </>
    )
}

export default NotFound;