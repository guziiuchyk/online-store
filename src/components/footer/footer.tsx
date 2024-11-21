import React from "react";
import styles from "./footer.module.css"
import {Link} from "react-router-dom";
import linkedinIcon from "../../assets/Linkedin-icon.svg"
import facebookIcon from "../../assets/facebook-icon.svg"
import instagramIcon from "../../assets/instagram-icon.svg"
import twitterIcon from "../../assets/twitter-icon.svg"

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.hero_section}>
                <div className={styles.nav}>
                    <Link className="heading5" to={"/contact"}>CONTACT</Link>
                    <Link className="heading5" to={"/terms-of-services"}>TERMS OF SERVICES</Link>
                    <Link className="heading5" to={"/shipping-and-returns    "}>SHIPPING AND RETURNS</Link>
                </div>
                <div className={styles.input_wrapper}>
                    <input className={styles.input} placeholder="Give am email, get the newsletter." type="text"/>
                    <button className={styles.button}>→</button>
                </div>
            </div>
            <div className={styles.bottom_section}>
                <div className={styles.terms}>
                    ©2024 Huziichuk.
                </div>
                <div className={styles.sm_links}>
                    <Link to="/"><img src={linkedinIcon} alt="linkedin"/></Link>
                    <Link to="/"><img src={facebookIcon} alt="facebook"/></Link>
                    <Link to="/"><img src={instagramIcon} alt="instagram"/></Link>
                    <Link to="/"><img src={twitterIcon} alt="twitter"/></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer