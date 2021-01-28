import React from "react";
import { Link } from "react-router-dom";
import "./styles/main.css";

function Header (){
    return(
        
    <div className="header">
        <Link className="header__title-link" to={`/`}>
        <h1 className="header__ title">Solstice | Journal</h1>
        </Link>
    <ul className="header__nav">
        <li className="header__li">
            <Link className="header__link" to={`/about`}>About
            </Link>
        </li>
                <li className="header__li">
            <Link className="header__link" to={`/index`}>Blog Index
            </Link>
        </li>
    </ul>
    </div>   
    );
}

export default Header;