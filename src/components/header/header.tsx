import React from "react";
import styles from "./header.module.css"
import logoImg from "../../assets/logo.png"
import bigLogo from "../../assets/background-logo.png"

const Header: React.FC = () => {

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.language_choose}>ENG</div>
                <button className={styles.button}>Login</button>
            </div>
            <div style={{backgroundImage:`url(${bigLogo})`}} className={styles.logo}>
                <img src={logoImg} alt="logo"/>
            </div>
        </header>
    )
}

export default Header