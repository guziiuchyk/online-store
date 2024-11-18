import React from "react";
import styles from "./footer.module.css"

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div>© Copyright 2024 <span className={styles.bold}>Huziichuk</span></div>
            <div>Terms | Privacy</div>
        </footer>
    )
}

export default Footer