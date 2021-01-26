import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./styles/main.css";
import Axios from "axios";

//Keywords API
const keywordsAPI = "/api/keywords";

function BlogIndex (){
//Set State

const [keywords, setKeywords] = useState([]);

//API call to retrieve keywords data
    const getKeywords = ()=>{
        Axios.get(keywordsAPI).then((response) =>{
        setKeywords(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    };

//Calling getKeywords method
    useEffect(()=>{
        if(keywords.length===0){
            getKeywords()
        }
    },[keywords]);
    return(
    <div className="index">
        <ul className="index__list">
            {keywords.map((keyword)=>(
                <li className="index__list-item">
                    
                        <img className="index__img" src={keyword.thumb} 
                        alt=""/>
                        <img className="index__img--desk" src={keyword.thumb_d} alt=""/>
                    <Link className="index__link" to={{
                        pathname: `/index/keyword/${keyword.path}`, id: keyword.id
                    }}>{keyword.title}</Link>
                    
                    </li>
            ))}
        </ul>
    </div>
    );
}

export default BlogIndex;