import React, {useState, useEffect} from "react";
import "./styles/main.css";
import author from "../assets/imgs/author_icon.jpg";
import entry from "../assets/imgs/entry_test.jpg";
import Axios from "axios";

//Posts API
const postsAPI = "http://localhost:5000/entries";

function Preview (){
//Set State
const[posts, setPosts]=useState([]);

//API call to retrieve posts data and
const getPosts = ()=>{
    Axios.get(postsAPI).then((response)=>{
        setPosts(response.data);
    })
    .catch((error)=>{
        console.log(error)
    })
    }

//Calling getPosts method
    useEffect(()=>{
        if(posts.length==0){
            getPosts()
        }
    }, [posts]);

    return(
        <div className="preview">
            {posts.map((post)=>(
                <div className="post">
                <img className="post__img" src={entry} alt=""/>
                <div className="post__details">
                    <h2 className="post__title">{post.title}</h2>
                    <img className="post__author-icon" src={author} alt=""/>
                    <p className="post__author">{post.author_id}</p>
                    <p className="post__date">{post.entry_date}</p>
                    <p className="post__summary">{post.summary}</p>
                </div>
            </div>
            ))}
            
        </div>
    )
}

export default Preview;