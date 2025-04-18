import React from "react";
import "../css/styles.css";
import homeImage from "../images/home.jpg";
import chefImage from "../images/chef.jpg";
import ambianceImage from "../images/ambiance.jpg";

function Home() {
  return (
    <div className="page home-page">
      <h1>Welcome to Pops and Ruby's</h1>
      <img src={homeImage} alt="Restaurant interior" className="hero-img" />
      <p>Experience the best fusion of modern and traditional cuisine!</p>

      <section className="features">
        <h2>Our Featured Services</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Dine-In</h3>
            <p>Relax and enjoy a cozy atmosphere with mouth-watering dishes.</p>
          </div>
          <div className="feature-card">
            <h3>Takeaway</h3>
            <p>Order ahead and grab your meal on the go with ease.</p>
          </div>
          <div className="feature-card">
            <h3>Delivery</h3>
            <p>Hot meals delivered to your doorstep with a smile.</p>
          </div>
        </div>
      </section>
      <section className="gallery mt-4">
        <h2>Inside Our Kitchen</h2>
        <div className="gallery-grid">
          <img src={chefImage} alt="Chef cooking" />
          <img src={ambianceImage} alt="Restaurant ambiance" />
        </div>
      </section>
    </div>
  );
}

export default Home;
