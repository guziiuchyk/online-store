import { useState } from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import styles from "./auth.module.css"
import Header from "../../components/header/header.tsx";
import Footer from "../../components/footer/footer.tsx";

function Auth() {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname.slice(1));
    const navigate = useNavigate();

    const handleClick = (button:string) => {
        setActive(button);
        navigate(`/${button}`);
    };

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <div className="heading1">My account</div>
                <div>
                    <div className={styles.button_wrapper}>
                        <div className={`${styles.buttonGroup} heading3`}>
                            <button
                                className={`${styles.button} ${active === "login" ? styles.active : ""}`}
                                onClick={() => handleClick("login")}
                            >
                                Sign in
                            </button>
                            <button
                                className={`${styles.button} ${active === "register" ? styles.active : ""}`}
                                onClick={() => handleClick("register")}
                            >
                                Register
                            </button>
                            <div className={`${styles.highlight} ${styles[active]}`}/>
                        </div>
                    </div>
                </div>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default Auth;