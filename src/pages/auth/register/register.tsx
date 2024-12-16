import React, {useState} from "react";
import styles from "./register.module.css"
import CustomInput from "../../../components/customInput/customInput.tsx";

const Register: React.FC = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordConfirmError, setPasswordConfirmError] = useState(false);

    return (
        <div className={styles.wrapper}>
            <CustomInput value={email} setValue={setEmail} required={true} placeholder={"Email"}
                         hasError={emailError} setHasError={setEmailError}/>
            <CustomInput value={name} setValue={setName} required={true} placeholder={"Name"}
                         hasError={nameError} setHasError={setNameError}/>
            <CustomInput value={password} setValue={setPassword} required={true} placeholder={"Password"}
                         hasError={passwordError} setHasError={setPasswordError}/>
            <CustomInput value={confirmPassword} setValue={setConfirmPassword} required={true}
                         placeholder={"Confirm Password"}
                         hasError={passwordConfirmError} setHasError={setPasswordConfirmError}/>
            <button className={`button-black ${styles.button}`}>REGISTER</button>
        </div>
    )
}

export default Register;