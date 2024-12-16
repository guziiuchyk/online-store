import React, {useState} from "react";
import Header from "../../components/header/header.tsx";
import Footer from "../../components/footer/footer.tsx";
import styles from "./resetPassword.module.css"
import CustomInput from "../../components/customInput/customInput.tsx";

const ResetPassword: React.FC = () => {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    return (
        <>
            <Header/>
            <div className={styles.wrapper}>
                <div className={`heading1 ${styles.title}`}>
                    Have you Forgotten Your Password ?
                </div>
                <div className={`heading3 ${styles.description}`}>If you've forgotten your password, enter your e-mail address and we'll send you an e-mail </div>
                <CustomInput value={email} setValue={setEmail} required={true} placeholder={"Login"}
                             hasError={emailError} setHasError={setEmailError}/>
                <button className={`button-black ${styles.button}`}>RESET PASSWORD</button>
            </div>
            <Footer/>
        </>
    )
}

export default ResetPassword