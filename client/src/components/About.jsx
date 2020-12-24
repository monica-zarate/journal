import React, {useState, useEffect} from "react";
import "./styles/main.css";
import about from "../assets/imgs/about.png";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Posts API
const postsAPI = "http://localhost:5000/entries";

function About (){

    const getContent = ()=>{Axios.get(postsAPI)
        .then((response)=>{
            let aboutContent = document.querySelector(".about__content");
            let contentResponse = response.data[0].content;
            aboutContent.innerHTML = contentResponse;
        })
        .catch((error)=>{
        console.log(error)
    })
    };

    return(
    <div className="about">
        <h1 className="about__title">Hello there!</h1>
        <h2 className="about__subtitle">Welcome to Monica's Solstice</h2>
        <img className="about__img" src={about} alt=""/>
        <p className="about__content">{getContent()}</p>
        <a className="about-l__social-link" href="https://www.instagram.com/monica.solstice/">
            <button className="about-l__social"><FontAwesomeIcon icon={['fab','instagram']} size="3x"/></button>
        </a>
    </div>
    );
}

export default About;