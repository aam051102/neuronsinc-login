import React, { useState } from "react";
import Input from "../Input";

import eyeHidden from "../../assets/images/eye-hidden.svg";

import "./index.scss";

const PasswordInput = (props) => {
    /* States */
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    /* Functions */
    const handleShowPassword = (e) => {
        e.preventDefault();

        setIsPasswordShown(!isPasswordShown);
    };

    /* Return */
    return (
        <Input type={isPasswordShown ? "text" : "password"} {...props}>
            <button
                className="input-password-show-button"
                onClick={handleShowPassword}
                data-testid="show-password-button"
            >
                <img src={eyeHidden} alt="Show password." />
            </button>
        </Input>
    );
};

export default PasswordInput;
