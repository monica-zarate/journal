import React from "react";
import AboutLanding from "./AboutLanding";
import Preview from "./Preview";
import "./styles/main.css";

function Landing (){
    return(
        <>
            <div className="landing">    
            </div>
            <div className="landing__wrapper">
                <Preview/>
                <AboutLanding/>
            </div>
        </>
    );
}

export default Landing;