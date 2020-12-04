import React from "react";
import "./styles/main.css";
import author from "../assets/imgs/author_icon.jpg";
import entry from "../assets/imgs/entry_test.jpg";

function Preview (){
    return(
        <div className="preview">
            <div className="post">
                <img className="post__img" src={entry} alt=""/>
                <div className="post__details">
                    <h2 className="post__title">Walt Disney World 2020</h2>
                    <img className="post__author-icon" src={author} alt=""/>
                    <p className="post__author">Monica Zhazil</p>
                    <p className="post__date">February 2020</p>
                    <p className="post__summary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, tenetur labore repudiandae omnis nemo eligendi sequi amet ipsam maiores, maxime cumque eveniet expedita quia, vel voluptatem odit at voluptates exercitationem.</p>
                </div>
            </div>
        </div>
    )
}

export default Preview;