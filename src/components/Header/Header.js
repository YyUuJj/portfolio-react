import React from"react";

import "./Header.scss";
import HeaderContent from "../HeaderContent/HeaderContent";

import logo from "../../resources/img/logo.png";

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo}/>
                <ul>
                    <li>Обо мне</li>
                    <li>Портфолио</li>
                    <li>Контакты</li>
                    <button>Резюме</button>
                </ul>
            </nav>
            <HeaderContent/>
        </header>
    )
}

export default Header;