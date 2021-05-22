import React, { useRef } from "react";

import "./index.scss";

const Form = (props) => {
    /* Refs */
    const formRef = useRef();

    /* Functions */
    const checkFormValidity = (e) => {
        e.preventDefault();

        let valid = true;
        const data = formRef.current.elements;

        for (let i = 0; i < data.length; i++) {
            const el = data[i];

            if (el.value !== "") {
                if (
                    el.pattern &&
                    new RegExp(el.pattern).test(el.value) === false
                ) {
                    valid = false;
                }
            } else if (el.required) {
                valid = false;
            }

            // TODO: Provide feedback
        }

        if (valid) {
            if (props.onFormValid) props.onFormValid();
        }

        return valid;
    };

    /* Return */
    return (
        <form
            className="form"
            ref={formRef}
            onSubmit={checkFormValidity}
            noValidate
            data-testid="form"
        >
            {props.children}
        </form>
    );
};

export default Form;
