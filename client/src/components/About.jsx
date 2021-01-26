import React from "react";
import "./styles/main.css";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Authors API
const postsAPI = "/api/authors";

function About (){

    const getContent = ()=>{Axios.get(postsAPI)
        .then((response)=>{
            let aboutContent = document.querySelector(".about__content");
            let contentResponse = response.data[0].about;
            aboutContent.innerHTML = contentResponse;
            let aboutImg = document.querySelector(".about__img");
            let imgResponse = response.data[0].thumb;
            aboutImg.src = imgResponse;
        })
        .catch((error)=>{
        console.log(error)
    })
    };

    return(
    <div className="about">
        <h1 className="about__title">Everyone is Welcome! <span>🍃</span></h1>
        <img className="about__img" src={getContent()} alt=""/>
        <p className="about__content">{getContent()}</p>
        <a className="about__social-link" href="https://www.instagram.com/monica.solstice/" target="_blank" rel="noopener noreferrer">
            <button className="about__social"><FontAwesomeIcon icon={['fab','instagram']} size="3x"/></button>
        </a>
    </div>
    );
}

export default About;