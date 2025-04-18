// Author Name: Sumit Arya
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
      <section className="about-services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-utensils"></i>
            </div>
            <h3>Private Dining</h3>
            <p>
              Perfect for birthdays, anniversaries, and exclusive celebrations
              in a cozy and elegant setting.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tree"></i>
            </div>
            <h3>Outdoor Patio</h3>
            <p>
              Enjoy our delicious meals al fresco with a serene ambiance during
              warm months.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-concierge-bell"></i>
            </div>
            <h3>Catering & Events</h3>
            <p>
              From office lunches to weddings, we bring the flavor to your
              special events with custom menus.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-gift"></i>
            </div>
            <h3>Gift Cards & Rewards</h3>
            <p>
              Share the joy with gift cards or earn points every time you dine
              through our loyalty program.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-hat-chef"></i>
            </div>
            <h3>Chef's Table</h3>
            <p>
              Book a front-row seat to creativity with our live cooking
              demonstrations and chef-curated menus.
            </p>
          </div>
        </div>
      </section>

      <section className="about-offers mt-4">
        <h2 className="mb-3">Current Offers</h2>
        <p>
          <strong>Happy Hour:</strong> 2-for-1 appetizers from 3 PM to 6 PM on
          weekdays
        </p>
        <p>
          <strong>Family Fridays:</strong> Free dessert for kids with any family
          meal
        </p>
        <p>
          <strong>Loyalty Card:</strong> Get a free entrée on your 10th visit!
        </p>
      </section>
    </div>
  );
}

export default About;
