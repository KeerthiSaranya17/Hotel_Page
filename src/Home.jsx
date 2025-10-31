import React from "react";
// import HotelSlider from "react-slick";
import HotelSlider from "./HotelSlider";
import Anemities from "./Anemities";
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
      <footer >
      <div >
        
        <div className="info">
          
          <div >
            <h3 >Contact Us</h3>
            <p>123 Serenity Street, City, Country</p>
            <p>Phone: +123 456 7890</p>
            <p>Email: info@hotelserenity.com</p>
          </div>

          
          <div >
            <h3 >Quick Links</h3>
            <ul>
              <li><a href="/" >Home</a></li>
              <li><a href="/about" >About</a></li>
              <li><a href="/contact" >Contact</a></li>
              <li><a href="/privacy" >Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        
        <div className="social-media">
          <h3 className="text-xl md:text-2xl font-bold mr-4">Follow Us</h3>
          <a href="#" >Facebook</a>
          <a href="#" >Instagram</a>
          <a href="#" >LinkedIn</a>
        </div>

        {/* Divider */}
        <hr  />

        {/* Bottom Line */}
        <div className="copyright">
         <p> © 2025 Hotel Serenity. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Page;
