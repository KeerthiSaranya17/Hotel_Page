import React from "react";
import Contact from "./Contact";
import kingbed from '../assets/suite room with king bed.avif'
import accom from '../assets/Accomodation.jpg';
import suitebar from '../assets/suite bar.jpg';
import singlebed from '../assets/single bed.jpg';
import doublebed from '../assets/double bed.jpg';
// import { useNavigate } from "react-router";

const Accomodations = () => {
  return (
    <div className="accomodations">
      <img className="accom-img" src={accom}></img>
      <h1 className="accom-heading">Accomodations</h1>
      <p className="accom-des">
        Enjoy accomodations at MYSTIQUE KEY. Immerse yourself in the luxury
        suites
      </p>
      <div className="section">
        <div className="section1">
          <p className="sec-heading">Warm & Inviting</p>
          <span>
            Discover a stay that blends comfort with elegance. Our
            accommodations are thoughtfully designed with modern amenities,
            plush furnishings, and serene interiors to make you feel right at
            home. Whether you’re here for business or leisure, each room offers
            the perfect retreat after a long day.
          </span>
        </div>
        <div className="section1">
          <p className="sec-heading">Luxury Focused</p>
          <span>
            Experience refined comfort in our spacious accommodations, featuring
            contemporary décor, premium bedding, and breathtaking views. Each
            room is equipped with high-speed Wi-Fi, smart entertainment, and a
            relaxing ambiance to ensure a stay defined by luxury and
            convenience.
          </span>
        </div>
        <div className="section1">
          <p className="sec-heading">Family-Friendly</p>
          <span>
            Our hotel offers a variety of accommodations to suit every
            traveler—from cozy single rooms for solo guests to spacious family
            suites. Each room is designed with comfort and practicality in mind,
            featuring modern amenities, ample storage, and a welcoming
            atmosphere for a truly memorable stay.
          </span>
        </div>
        <div className="section1">
          <p className="sec-heading">Short & Crisp</p>
          <span>
            Relax and recharge in our modern accommodations, complete with
            stylish interiors, essential amenities, and warm hospitality. Every
            detail is designed to provide you with comfort and convenience
            throughout your stay.
          </span>
        </div>
      </div>
      
      <section >
        <div className="categories">
          <div className="category-container">
            <img src={kingbed} />
            <div className="tag-section">
              <h3>Suite Room with king bed</h3>
              <p>
                Experience ultimate comfort in our elegantly designed rooms and
                suites, equipped with modern amenities and offering breathtaking
                views for a relaxing stay.
              </p>
              <div>
                <button
                  // onClick={() => Navigate("/accomodations")}
                  className="explore-button"
                >
                  Explore More
                </button>
              </div>
            </div>
          </div> 
          <div className="category-container">
            <img src={suitebar} />
            <div className="tag-section">
              <h3>Suite room with bar</h3>
              <p>
                Experience ultimate comfort in our elegantly designed rooms and
                suites, equipped with modern amenities and offering breathtaking
                views for a relaxing stay.
              </p>
              <div>
                <button
                  // onClick={() => Navigate("/accomodations")}
                  className="explore-button"
                >
                  Explore More
                </button>
              </div>
            </div>
          </div> 
          <div className="category-container">
            <img src={singlebed} />
            <div className="tag-section">
              <h3>Luxury room with single bed </h3>
              <p>
                Experience ultimate comfort in our elegantly designed rooms and
                suites, equipped with modern amenities and offering breathtaking
                views for a relaxing stay.
              </p>
              <div>
                <button
                  // onClick={() => Navigate("/accomodations")}
                  className="explore-button"
                >
                  Explore More
                </button>
              </div>
            </div>
          </div> 
          <div className="category-container">
            <img src={doublebed} />
            <div className="tag-section">
              <h3>Luxury room with double bed</h3>
              <p>
                Experience ultimate comfort in our elegantly designed rooms and
                suites, equipped with modern amenities and offering breathtaking
                views for a relaxing stay.
              </p>
              <div>
                <button
                  // onClick={() => Navigate("/accomodations")}
                  className="explore-button"
                >
                  Explore More
                </button>
              </div>
            </div>
          </div> 
           
        </div>
      </section>
      <section class="offer-strip">
        <div class="offer-content">
          <div class="offer-text">
            <h1>🔥 70% OFF on First Stay – Limited Time!</h1>
            <p>
              Exclusive online offer on Deluxe & Suite Rooms. Book your dream
              stay today.
            </p>
          </div>
          <button class="offer-btn">Book Now</button>
        </div>
      </section>
      <div>
        <Contact/>
      </div>
    </div>
  );
};

export default Accomodations;
