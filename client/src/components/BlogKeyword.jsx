import React, {useState, useEffect} from "react";
import "./styles/main.css";
import Axios from "axios";
import PostPreview from "./PostPreview";

function BlogKeyword(props){
//Entries per Keyword API
let postsAPI = "/api/entries/keywords/" ;

//Set State
const[posts, setPosts] = useState([]);
const [loaded, itsLoaded] = useState(false);

//API call to retrieve posts data
const getPostsKeyword = ()=>{
    let path = props.match.params.path;
    Axios.get(postsAPI+path).then((response)=>{
        itsLoaded(true);
        setPosts(response.data);
    }).catch((error)=>{
        console.log(error)
    })
    
}

//Calling getPostsKeyword method
    useEffect(()=>{
        if(loaded === false){
            getPostsKeyword()
        }
    }, [posts]);

    return(
        <div className="preview">
            {posts.map((post)=>
                <PostPreview post = {post} ></PostPreview>
            )}
            
        </div>
    )
}

export default BlogKeyword;