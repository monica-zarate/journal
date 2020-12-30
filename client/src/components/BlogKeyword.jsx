import React, {useState, useEffect} from "react";
import "./styles/main.css";
import Axios from "axios";
import author from "../assets/imgs/author_icon.jpg";
import entry from "../assets/imgs/entry_test.jpg";

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

export default BlogKeyword;