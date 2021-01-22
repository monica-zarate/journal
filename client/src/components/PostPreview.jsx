import React from "react";
import "./styles/main.css";
import author from "../assets/imgs/author.png";
import { Link } from "react-router-dom";

function PostPreview(props){

    let post = props.post;

    return(
        <Link className="post__link" to={{pathname: `/entries/${post.title}`, id: post.id}}>
        <div className="post">
                <img className="post__img" src={post.thumb} alt=""/>
                <div className="post__details">
                    <h2 className="post__title">{post.title}</h2>
                    <img className="post__author-icon" src={author} alt=""/>
                    <p className="post__author">{post.author_id}</p>
                    <p className="post__date">{post.entry_date}</p>
                    <p className="post__summary">{post.summary}</p>
                </div>
            </div>
            </Link>
    )
}

export default PostPreview;