import React from "react";
import Logo from './imgs/Logotipo CZnet.png'

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="Logotipo principal da CZnet"/>
            <h1>Curso de React</h1>
        </header>
    );
}