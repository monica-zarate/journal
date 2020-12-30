import React, {useState, useEffect} from "react";
import "./styles/main.css";
import Axios from "axios";
import Post from "./Post";

function BlogKeyword(props){
//Entries per Keyword API
let postsAPI = "http://localhost:5000/entries/keywords/" + props.location.id;

//Set State
const[posts, setPosts] = useState([]);
const [loaded, itsLoaded] = useState(false);

//API call to retrieve posts data
const getPostsKeyword = ()=>{
    if(props.location.id !== undefined){
    Axios.get(postsAPI).then((response)=>{
        itsLoaded(true);
        setPosts(response.data);
    }).catch((error)=>{
        console.log(error)
    })
    }
}

//Calling getPostsKeyword method
    useEffect(()=>{
        if(loaded == false){
            getPostsKeyword()
        }
    }, [posts]);

    // console.log(posts)

    return(
        <div className="preview">
            {posts.map((post)=>
                <Post post = {post} ></Post>
            )}
            
        </div>
    )
}

export default BlogKeyword;