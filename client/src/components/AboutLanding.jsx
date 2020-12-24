import React from "react";
import "./styles/main.css";
import author from "../assets/imgs/author_icon.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutLanding(){
    return(
        <div className="about-l">
            <h1 className="about-l__title">Hello and welcome!</h1>
            <h2 className="about-l__subtitle">My name is Monica</h2>
            <img className="about-l__icon" src={author} alt=""/>
            <p className="about-l__description">Monica's Solstice was born to serve as a Pensieve, a place where I can keep a record of experiences and memories to come back to and share with others. I'm happy you're here! Take a look around, come along with me and my camera!</p>
            <Link to={`/about`}className="about-l__link">
            <button className="about-l__btn">About me</button>
            </Link>
            <a className="about-l__social-link" href="https://www.instagram.com/monica.solstice/">
            <button className="about-l__social"><FontAwesomeIcon icon={['fab','instagram']} size="3x"/></button></a>
        </div>
    )
}

export default AboutLanding;