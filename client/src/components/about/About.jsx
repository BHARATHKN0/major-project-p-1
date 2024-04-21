import React from "react";
import Image1 from '../../Assets/REVA_UNIVERSITY.jpg'
import './About.css'
import Slider from "./Slider";

const About = () => {
    return (
        <>
        <div className="hero">
            <img src={ Image1 } alt="" className="hero__image"/>
            <h1 className="hero__title">About REVA</h1>
        </div>
        <Slider />
        </>
    )
}


export default About;