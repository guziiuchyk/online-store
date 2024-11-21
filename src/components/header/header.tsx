import React from "react";
import styles from "./header.module.css"
import {NavLink} from "react-router-dom";
import searchIcon from "../../assets/search-icon.svg"
import cartIcon from "../../assets/cart-icon.svg"
import accountIcon from "../../assets/account-icon.svg"
const Header: React.FC = () => {

    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}><span className={styles.gold}>S</span>HOPPE</div>
            <nav className={styles.nav}>
                <NavLink className={`${styles.text_link} heading5`} to={"/"}>Shop</NavLink>
                <NavLink className={`${styles.text_link} heading5`} to={"/blog"}>Blog</NavLink>
                <NavLink className={`${styles.text_link} heading5`} to={"/our-story"}>Our Story</NavLink>
                <span className={styles.separator}></span>
                <NavLink className={styles.image_link} to={"/search"}><img src={searchIcon} alt="search"/></NavLink>
                <NavLink className={styles.image_link} to={"/cart"}><img src={cartIcon} alt="cart"/></NavLink>
                <NavLink className={styles.image_link} to={"/account"}><img src={accountIcon} alt="account"/></NavLink>
            </nav>
        </header>
    )
}

export default Header