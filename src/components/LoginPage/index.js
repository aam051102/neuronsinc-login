import React from "react";
import Header from "../Header";
import Input from "../Input";
import Form from "../Form";

import DrawingLogin from "../../assets/images/drawing-login.svg";

import "./index.scss";

const LoginPage = () => {
    /* --- Functions --- */
    const handleLoginFormValid = () => {
        // NOTE: Only here to have something happen in place of a normal page change.
        window.location.reload();
    };

    /* --- Return --- */
    return (
        <div className="login-page">
            <Header />

            <div className="content-area">
                <div className="popup-area">
                    <section className="popup-area-welcome">
                        <p>Welcome back!</p>
                        <p>
                            Nice to see you again, we hope you are doing great
                        </p>

                        <img
                            className="illustration"
                            src={DrawingLogin}
                            alt="Illustration of person entering a door."
                        />
                    </section>

                    <section className="popup-area-login">
                        <h1 className="title">
                            <span className="underlined">User </span>
                            <span className="medium">login</span>
                        </h1>

                        <Form onFormValid={handleLoginFormValid}>
                            <Input
                                id="user-login_email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" // NOTE: Basic HTML5 email regex. More complex version should be used in real scenario.
                                required
                            />

                            <Input
                                id="user-login_password"
                                type="password"
                                name="password"
                                autoComplete="current-password"
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

                                <a
                                    className="forgot-password"
                                    href="/" // NOTE: Only here in place of usual link.
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <div className="button-wrapper">
                                <button type="submit" value="Login"></button>
                            </div>
                        </Form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
