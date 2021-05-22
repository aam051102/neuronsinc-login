import React, { useState } from "react";
import Input from "../Input";

import { ReactComponent as EyeIcon } from "../../assets/images/eye-ico.svg";

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
                className={`input-password-show-button${
                    isPasswordShown ? " password-shown" : ""
                }`}
                onClick={handleShowPassword}
                data-testid="show-password-button"
            >
                <EyeIcon />
            </button>
        </Input>
    );
};

export default PasswordInput;
