// Author name: Dinesh Narasimhalu Punniyamoorthy
import React from "react";
import "../css/styles.css";
import homeImage from "../images/home.jpg";
import chefImage from "../images/chef.jpg";
import ambianceImage from "../images/ambiance.jpg";

function Home() {
  return (
    <div className="page home-page">
      <h1>Welcome to <span>Pops</span> and <span>Ruby's</span> Restaurant</h1>
      <img src={homeImage} alt="Restaurant interior" className="hero-img" />
      <p className="mt-3">
        Experience the best fusion of modern and traditional cuisine! At Tasty
        Treats, every dish is crafted with passion and precision, offering a
        rich palette of flavors that tell a story of heritage and innovation.
        Whether it's a family dinner or a quick bite, we bring a dining
        experience that feels both nostalgic and refreshingly new.
      </p>

      <section className="introduction mt-4">
        <h2>What Makes Us Special</h2>
        <p>
          At Tasty Treats, we believe food is more than just nourishment — it's
          an experience. Our chefs are passionate artisans who blend traditional
          recipes with modern flavors. Whether you're dining with family,
          enjoying a solo lunch, or celebrating a special event, we make every
          moment memorable.
        </p>
        <p>
          All our ingredients are locally sourced and hand-picked to ensure
          freshness and sustainability. Our menu changes seasonally to bring you
          exciting new tastes while keeping your favorites available all year
          round.
        </p>
      </section>

      <section className="features mt-4">
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
