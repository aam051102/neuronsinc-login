import React from "react";

import Logo from "../../assets/images/logo.svg";
import "./index.scss";

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={Logo} alt="Logo" />

            <p className="title">Hub</p>
        </header>
    );
};

export default Header;
