import React, { useState } from "react";

import eyeHidden from "../../assets/images/eye-hidden.svg";

import "./index.scss";

// NOTE: Probably more efficient to password handling to separate element.
const Input = (props) => {
    /* States */
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    /* Functions */
    const handleShowPassword = (e) => {
        e.preventDefault();

        setIsPasswordShown(!isPasswordShown);
    };

    /* Return */
    return (
        <div className={`input-wrapper ${props.name}-wrapper`}>
            <label className="input-label" htmlFor={props.id}>
                {props.name}
            </label>

            {props.type === "password" ? (
                <>
                    <button
                        className="input-password-show-button"
                        onClick={handleShowPassword}
                    >
                        <img src={eyeHidden} alt="Show password." />
                    </button>

                    <input
                        className="input-field"
                        {...props}
                        type={isPasswordShown ? "text" : "password"}
                    />
                </>
            ) : (
                <input className="input-field" {...props} />
            )}
        </div>
    );
};

export default Input;
