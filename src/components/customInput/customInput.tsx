import React, {ChangeEvent, useRef, KeyboardEvent} from "react";
import styles from "./customInput.module.css";
import crossIcon from "../../assets/cross-icon.svg";

interface PropsType {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    hasError?: boolean;
    setHasError?: React.Dispatch<React.SetStateAction<boolean>>;
    placeholder?: string;
    required?: boolean;
}

const CustomInput: React.FC<PropsType> = (
    {
        value,
        setValue,
        placeholder = "",
        required = false,
        hasError,
        setHasError,
    }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (setHasError) {
            setHasError(e.target.value.length === 0);
        }
    };

    const clear = () => {
        setValue("");
        inputRef.current?.focus();
        if (setHasError) {
            setHasError(true);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const inputs = Array.from(
                document.querySelectorAll<HTMLInputElement>(`.${styles.input}`)
            );

            const currentIndex = inputs.findIndex((input) => input === inputRef.current);

            if (currentIndex !== -1 && currentIndex < inputs.length - 1) {
                const nextInput = inputs[currentIndex + 1];
                nextInput.focus();
            }
        }
    };

    return (
        <div className={styles.wrapper}>
            <input
                ref={inputRef}
                maxLength={20}
                className={styles.input}
                placeholder={placeholder}
                type="text"
                value={value}
                onChange={handleChangeInput}
                onKeyDown={handleKeyDown}
            />
            {value.length > 0 && (
                <div onClick={clear} className={styles.clear}>
                    <img src={crossIcon} alt="cross"/>
                </div>
            )}
            {hasError && required && (
                <div className={styles.error}>Required field.</div>
            )}
        </div>
    );
};

export default CustomInput;
