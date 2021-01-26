import React, {useState, useEffect} from "react";
import "./styles/main.css";
import Axios from "axios";
import PostPreview from "./PostPreview";

//Posts API
const postsAPI = "/api/entries";

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
        if(posts.length===0){
            getPosts()
        }
    }, [posts]);

    return(
        <div className="preview">
            {posts.map((post)=>(
                <PostPreview post ={post}></PostPreview>
            ))}
            
        </div>
    )
}

export default Preview;