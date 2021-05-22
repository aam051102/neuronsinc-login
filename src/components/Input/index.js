import React from "react";

import "./index.scss";

const Input = (props) => {
    return (
        <div className={`input-wrapper ${props.name}-wrapper`}>
            {props.children}

            <label
                className="input-label"
                htmlFor={props.id}
                data-testid="input-label"
            >
                {props.name}
            </label>
            <input
                className="input-field"
                {...props}
                data-testid="input-field"
                children={null}
            />
        </div>
    );
};

export default Input;
