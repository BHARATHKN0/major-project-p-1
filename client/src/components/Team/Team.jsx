import React from "react";
import { styled } from "@mui/material";
import './Team.css'
import Shashi from "../../Assets/shashi.jpg";
import Image2 from "../../Assets/dp.jpg";
import Thejesh from "../../Assets/thejesh.png";
import Bharath from "../../Assets/bharath1.png";

const Image = styled('img')({
    width: '200px',
  });

const Team = () => {
  return (
    <>
    <h1 className="team-title">ABOUT TEAM</h1>
    <div className="image-container">
      <div className="image-wrapper">
        <Image src={Image2} alt="Image 1" className="round-image" />
        <div className="image-info">
          <h3>K V SAI HARSHITH</h3>
          <p>R20EJ024</p>
          <p>COMPUTER SCIENCE & INFORMATION TECHNOLOGY</p>
        </div>
      </div>
      <div className="image-wrapper">
        <Image src={Shashi} alt="Image 2" className="round-image" />
        <div className="image-info">
          <h3>A N SHASHI KUMAR</h3>
          <p>R20EJ001</p>
          <p>COMPUTER SCIENCE & INFORMATION TECHNOLOGY</p>
        </div>
      </div>
      <div className="image-wrapper">
        <Image src={Thejesh} alt="Image 3" className="round-image" />
        <div className="image-info">
          <h3>P SAI THEJESH</h3>
          <p>R20EJ036</p>
          <p>COMPUTER SCIENCE & INFORMATION TECHNOLOGY</p>
        </div>
      </div>
      <div className="image-wrapper">
        <Image src={Bharath} alt="Image 4" className="round-image" />
        <div className="image-info">
          <h3>BHARATH K N</h3>
          <p>R20EJ012</p>
          <p>COMPUTER SCIENCE & INFORMATION TECHNOLOGY</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Team;
