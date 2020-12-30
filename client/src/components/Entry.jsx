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
    <div>
        <h2>{post.title}</h2>
        <p>{post.author_id}</p>
        <p>{post.entry_date}</p>
        <p>{post.content}</p>
        <p>{post.keyword1_id}</p>
        <p>{post.keyword2_id}</p>
        <p>{post.keyword3_id}</p>
    </div>
)
}

export default Entry;