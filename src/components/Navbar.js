import React from "react";
import logo from "../Images/airbnb.svg"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="AirBnB Logo" className="nav__logo" />
        </nav>
    );
}