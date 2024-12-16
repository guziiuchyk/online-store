import React, {useState} from "react";
import styles from "./login.module.css"
import CustomInput from "../../../components/customInput/customInput.tsx";
import {Link} from "react-router-dom";

const Login: React.FC = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    return (
        <div className={styles.wrapper}>
            <CustomInput value={login} setValue={setLogin} required={true} placeholder={"Login"}
                         hasError={loginError} setHasError={setLoginError}/>
            <CustomInput value={password} setValue={setPassword} required={true} placeholder={"Password"}
                         hasError={passwordError} setHasError={setPasswordError}/>
            <button className={`button-black ${styles.button}`}>SING IN</button>
            <Link to={`/reset-password`} className="heading5">Have you forgotten your password?</Link>
        </div>
    )
}

export default Login;