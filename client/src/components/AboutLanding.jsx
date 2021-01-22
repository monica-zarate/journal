import React from "react";
import "./styles/main.css";
// import author from "../assets/imgs/author_icon.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";

//Authors API
const authorsAPI = "http://localhost:5000/authors/";

function AboutLanding(){
    const getAuthor = ()=>{
        Axios.get(authorsAPI).then((response)=>{
            let aboutDescription = document.querySelector(".about-l__description");
            let contentResponse = response.data[0].landing;
            aboutDescription.innerHTML = contentResponse;
            let aboutImg = document.querySelector(".about-l__icon");
            let imgResponse = response.data[0].thumb;
            aboutImg.src = imgResponse;
        }).catch((error)=>{
            console.log(error)
        })
    };

    return(
        <div className="about-l">
            <h1 className="about-l__title">Hello and welcome!</h1>
            <h2 className="about-l__subtitle">My name is Monica</h2>
            <img className="about-l__icon" src={getAuthor()} alt=""/>
            <p className="about-l__description">{getAuthor()}</p>
            <Link to={`/about`}className="about-l__link">
            <button className="about-l__btn">About me</button>
            </Link>
            <a className="about-l__social-link" href="https://www.instagram.com/monica.solstice/" target="_blank" rel="noopener noreferrer">
            <button className="about-l__social"><FontAwesomeIcon icon={['fab','instagram']} size="3x"/></button></a>
        </div>
    )
}

export default AboutLanding;