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
            <p className="about-l__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum a non ullam autem voluptates voluptatem quasi, amet nobis nulla inventore possimus dolore nihil ratione, exercitationem magni, labore adipisci suscipit veritatis.</p>
            <Link to={`/about`}className="about-l__link">
            <button className="about-l__btn">About me</button>
            </Link>
            <button className="about-l__social"><FontAwesomeIcon icon={['fab','instagram']} size="3x"/></button>
        </div>
    )
}

export default AboutLanding;