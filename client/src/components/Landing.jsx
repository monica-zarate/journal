import React from "react";
import AboutLanding from "./AboutLanding";
import Preview from "./Preview";
import "./styles/main.css";

function Landing (){
    return(
        <>
    <div className="landing">
    <h1 className="landing__title">Landing Component</h1>
    
</div>
<Preview/>
<AboutLanding/>
</>
    );
}

export default Landing;