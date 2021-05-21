import React from "react";

import "./index.scss";

const Input = (props) => {
    return (
        <div className="input-wrapper">
            <label
                className="input-label"
                htmlFor={props.form + "_" + props.name}
            >
                {props.name}
            </label>
            <input
                className="input-field"
                id={props.form + "_" + props.name}
                name={props.name}
                type={props.type}
                required={props.required}
            />
        </div>
    );
};

export default Input;
