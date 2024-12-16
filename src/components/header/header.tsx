import React, {useState} from "react";
import styles from "./header.module.css"
import {Link, NavLink} from "react-router-dom";
import searchIcon from "../../assets/search-icon.svg"
import cartIcon from "../../assets/cart-icon.svg"
import accountIcon from "../../assets/account-icon.svg"

const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.wrapper}>
            <Link to={"/"} className={styles.logo}><span className={styles.gold}>S</span>HOPPE</Link>
            <nav className={styles.desktop_nav}>
                <NavLink className={`${styles.text_link} heading5`} to={"/"}>Shop</NavLink>
                <NavLink className={`${styles.text_link} heading5`} to={"/blog"}>Blog</NavLink>
                <NavLink className={`${styles.text_link} heading5`} to={"/our-story"}>Our Story</NavLink>
                <span className={styles.separator}></span>
                <NavLink className={styles.image_link} to={"/search"}><img src={searchIcon} alt="search"/></NavLink>
                <NavLink className={styles.image_link} to={"/cart"}><img src={cartIcon} alt="cart"/></NavLink>
                <NavLink className={styles.image_link} to={"/login"}><img src={accountIcon} alt="account"/></NavLink>
            </nav>
            <nav className={styles.mobile_nav}>
                <button className={`${styles.burger} ${isOpen ? styles.active : ""}`} onClick={() => {
                    setIsOpen(!isOpen)
                }}>
                    <p></p>
                    <p></p>
                    <p></p>
                </button>
            </nav>
            <nav className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
                <ul className="heading3">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header