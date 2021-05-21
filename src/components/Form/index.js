import React, { useRef } from "react";

import "./index.scss";

const Form = (props) => {
    /* Refs */
    const formRef = useRef();

    /* Functions */
    const checkFormValidity = (e) => {
        e.preventDefault();

        let valid = true;
        const data = new FormData(formRef.current);

        for (const [key, value] of data.entries()) {
            console.log(key, value);
            // TODO: Validity check
        }

        if (valid) {
            if (props.onFormValid) props.onFormValid();
        }

        return valid;
    };

    /* Return */
    return (
        <form className="form" ref={formRef} onSubmit={checkFormValidity}>
            {props.children}
        </form>
    );
};

export default Form;
