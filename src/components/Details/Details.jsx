import React from "react";
import { FaStar, FaHeart, FaShareAlt } from "react-icons/fa";
import "./Details.css";

// Sample company data
const companies = [
  { id: 1, logo: "🏢", city: "New York", projects: 12, name: "Company A", rating: 4, description: "Leading real estate firm in NYC............................................................................", },
  { id: 2, logo: "🏗", city: "Los Angeles", projects: 8, name: "Company B", rating: 5, description: "Innovative construction experts..........................................................................", },
  { id: 3, logo: "🏠", city: "Chicago", projects: 15, name: "Company C", rating: 3, description: "Trusted home builders since 2000...........................................................................", },
  { id: 4, logo: "🏙", city: "San Francisco", projects: 10, name: "Company D", rating: 4, description: "Luxury apartment developers...........................................................................", },
  { id: 5, logo: "🏘", city: "Houston", projects: 9, name: "Company E", rating: 5, description: "Affordable housing specialists...............................................................................", },
  { id: 6, logo: "🏛", city: "Miami", projects: 7, name: "Company F", rating: 4, description: "Commercial property innovators.................................................................................", },
];

const Details = () => {
  return (
    <div className="details-container">
      {/* Header Section */}
      <div className="header">
        <h2>Our Companies</h2>
        <input type="text" placeholder="Search..." className="search-box" />
      </div>
      <hr />

      {/* 6 Boxes (2x3 Grid) */}
      <div className="grid-container">
        {companies.map((company) => (
          <div className="grid-item" key={company.id}>
            {/* Share Icon (Top Right) */}
            <FaShareAlt className="share-icon" />

            {/* Left Side: Logo, City, Projects */}
            <div className="left">
              <div className="logo">{company.logo}</div>
              <p>{company.city}</p>
              <p>{company.projects} Projects</p>
            </div>

            {/* Right Side: Heading, Rating, Heart */}
            <div className="right">
              <h4>{company.name}</h4>
              <div className="rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className={index < company.rating ? "filled-star" : "empty-star"} />
                ))}
              </div>
              <div className="heart">
                <FaHeart className="heart-icon" />
                <span>Wonderful</span>
              </div>
            </div>

            {/* Description and Button */}
            <p className="description">{company.description}</p>
            <button className="visit-btn">Visit Page</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
