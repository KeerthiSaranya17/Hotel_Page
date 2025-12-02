import React from "react";
// import HotelSlider from "react-slick";
import HotelSlider from "./HotelSlider";
import Anemities from "./Anemities";
import Contact from "./Contact";
// import NavBar from './NavBar'

const Page = () => {
  return (
    <div>
      <HotelSlider/>
      {/* <img className="hotel-img" src="hotel_1.png" /> */}
      <div className="heading">
        <h1>Welcome to Mystique Key</h1>
      </div>
      <section>
        <p >
          Nestled in the heart of the city, <strong>Mystique Key</strong> is
          more than just a place to stay – it’s an experience of pure luxury and
          comfort. Our elegant architecture, modern amenities, and world-class
          hospitality make us the perfect choice for both leisure and business
          travelers.
        </p>
        <p >
          From beautifully designed rooms and gourmet dining to relaxing spa
          treatments and state-of-the-art conference facilities, every detail is
          crafted to ensure an unforgettable stay.
        </p>
        <ul >
          <p>✨ Elegant & Spacious Luxury Rooms</p>
          <p>✨ Award-Winning Fine Dining</p>
          <p>✨ Spa, Wellness & Fitness Facilities</p>
          <p>✨ Business & Event Venues</p>
        </ul>
      </section>
      <div>
        <Anemities/>
      </div>
      <div>
        <Contact/>
      </div>
    </div>
  );
};

export default Page;
