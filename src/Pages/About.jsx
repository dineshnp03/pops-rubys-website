import React from "react";
import aboutImage from "../images/about.jpg";
import "../css/styles.css";

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <img src={aboutImage} alt="Chef cooking" className="about-img" />
      <p>
        Pops and Ruby's is a family-owned restaurant bringing the heart of
        Italian cuisine to your neighborhood. Our passion lies in delivering
        flavorful, hearty meals crafted with love.
      </p>
      <p>
        Founded in 2005, we've been delighting guests with quality ingredients,
        a warm ambiance, and exceptional service. Whether you dine-in or order
        online, your satisfaction is our recipe.
      </p>
    </div>
  );
}

export default About;
