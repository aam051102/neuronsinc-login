import React, { useRef } from "react";
import Header from "../Header";

import DrawingLogin from "../../assets/images/drawing-login.svg";

import "./index.scss";
import Input from "../Input";

const LoginPage = () => {
    /* --- Refs --- */
    const loginFormRef = useRef();

    /* --- Functions --- */
    /**
     * Handles login button click.
     * @param {Event} e
     */
    const loginButtonClickHandler = (e) => {
        e.preventDefault();

        // Perform validity checks
        let valid = true;
        const data = new FormData(loginFormRef.current);

        for (const [key, value] of data.entries()) {
            console.log(key, value);
        }

        // Perform some action to indicate a successful submit.
        if (valid) {
            window.location.href = "#";
        }
    };

    /* --- Return --- */
    return (
        <div className="login-page">
            <Header />

            <div className="content-area">
                <div className="popup-area">
                    <section className="content-left">
                        <p>Welcome back!</p>
                        <p>
                            Nice to see you again, we hope you are doing great
                        </p>

                        <img
                            className="drawing"
                            src={DrawingLogin}
                            alt="Illustration of person entering a door."
                        />
                    </section>
                    <section className="content-right">
                        <form id="login-form" ref={loginFormRef}>
                            <h1 className="title">
                                <span className="underlined">User </span>
                                <span className="medium">login</span>
                            </h1>

                            <Input
                                form="user-login"
                                type="email"
                                name="email"
                                required
                            />

                            <Input
                                form="user-login"
                                type="password"
                                name="password"
                                required
                            />

                            <div className="user-details">
                                <div className="user-login_rememberme-wrapper">
                                    <input
                                        id="user-login_rememberme"
                                        name="rememberme"
                                        type="checkbox"
                                    />
                                    <label
                                        className="user-login_rememberme-label"
                                        htmlFor="user-login_rememberme"
                                    >
                                        Remember me?
                                    </label>
                                </div>

                                <a className="forgot-password" href="#">
                                    Forgot password?
                                </a>
                            </div>

                            <div className="button-wrapper">
                                <button
                                    type="submit"
                                    className="login-button"
                                    onClick={loginButtonClickHandler}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
