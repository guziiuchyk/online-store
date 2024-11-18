import React from "react";
import styles from "./home.module.css"
import Header from "../../components/header/header.tsx";
import Footer from "../../components/footer/footer.tsx";
import SideBar from "../../components/sideBar/sideBar.tsx";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <SideBar>
                <div className={styles.title}>Huziichuk shop</div>
                <div className={styles.descrtiption}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                    cupiditate delectus dicta dolore dolorem et ipsam natus quae quasi voluptate.
                </div>
            </SideBar>
            <Footer/>
        </>
    )
}

export default Home;