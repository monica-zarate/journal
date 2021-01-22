import React, {useState, useEffect} from "react";
import "./styles/main.css";
import Axios from "axios";

function Entry(props){

    //Posts API per entry id
    const postsAPI = "http://localhost:5000/entries/" + props.location.id;

    //Set State
    const [post, setPost] = useState([]);
    const [loaded, itsLoaded] = useState(false);

    //API call to retrieve post data
    const getPost = ()=>{
        if(props.location.id !== undefined){
            Axios.get(postsAPI).then((response)=>{
                itsLoaded(true);
                setPost(response.data[0]);
            }).catch((error)=>{
                console.log(error)
            })
        }
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
        <p className="entry__author">{post.name}</p>
        <p className="entry__timestamp">{new Date(post.entry_date).toLocaleDateString()}</p>
        <div className="entry__content" dangerouslySetInnerHTML={{__html: post.content}}>
        </div>
        <p className="entry__keywords">{post.keyword1_id}</p>
        <p className="entry__keywords">{post.keyword2_id}</p>
        <p className="entry__keywords">{post.keyword3_id}</p>
    </div>
)
}

export default Entry;