import React, {useState, useEffect} from "react";
import "./styles/main.css";
import Axios from "axios";
import { Link } from "react-router-dom";

function Entry(props){

    //Posts API per entry id
    const postsAPI = "/api/entries/";

    //Set State
    const [post, setPost] = useState([]);
    const [loaded, itsLoaded] = useState(false);

    //API call to retrieve post data
    const getPost = ()=>{
        let path = props.match.params.path;
            Axios.get(postsAPI+path).then((response)=>{
                itsLoaded(true);
                setPost(response.data[0]);
            }).catch((error)=>{
                console.log(error)
            })
    }

    //Calling getPost method
    useEffect(()=>{
        if(loaded === false){
            getPost()
        }
    }, [post]);
    
    return(
    <div className="entry">
        <h2 className="entry__title">{post.title}</h2>
        <p className="entry__author">by {post.name}</p>
        <p className="entry__timestamp">{new Date(post.entry_date).toLocaleDateString()}</p>
        <div className="entry__content" dangerouslySetInnerHTML={{__html: post.content}}>
        </div>
        <div className="entry__keywords-container">
            <h3 className="entry__h3">Read more about:</h3>
            <ul className="entry__keywords-list">
                <li className="entry__keywords"><Link className="entry__keywords-link" to={`/index/keyword/${post.path1}`}>{post.title1}</Link></li>
                <li className="entry__keywords"><Link className="entry__keywords-link" to={`/index/keyword/${post.path2}`}>{post.title2}</Link></li>
                <li className="entry__keywords"><Link className="entry__keywords-link" to={`/index/keyword/${post.path3}`}>{post.title3}</Link></li>
                </ul>
        </div>
    </div>
)
}

export default Entry;