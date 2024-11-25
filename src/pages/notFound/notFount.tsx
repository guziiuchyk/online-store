import React from "react";
import styles from "./notFound.module.css"
import Header from "../../components/header/header.tsx";
import Footer from "../../components/footer/footer.tsx";
import {Link} from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <>
            <Header/>
            <div className={styles.wrapper}>
                <div className="heading1">404 ERROR</div>
                <div className={`${styles.desc} heading3`}>
                    <p>This page not found;</p>
                    <p>back to home and start again</p>
                </div>
                <div className={styles.button_wrapper}>
                    <Link className={`${styles.button} button-white body-large`} to={"/"}>HOME</Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default NotFound;