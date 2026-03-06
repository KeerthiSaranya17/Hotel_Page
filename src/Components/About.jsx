import React from "react";

const About = () => {
  return (
    <div className="about">
      <section>
        <div>
          <h2>About Us</h2>

          <div>
            <div>
              <p>
                Welcome to{" "}
                <span >
                  Hotel Serenity
                </span>
                , your home away from home. Located in the heart of{" "}
                <span >Aruku</span>, our hotel is
                designed to offer guests the perfect combination of luxury,
                convenience, and warm hospitality.
              </p>
              <p>
                From elegantly furnished rooms with modern amenities to a
                variety of dining options, spa & wellness services, and event
                spaces, we ensure every moment of your stay is special. Whether
                you’re a business traveler, a family on vacation, or a couple
                seeking a romantic getaway, we’ve got something just for you.
              </p>
              <p>
                Experience world-class service, explore local attractions, and
                make memories that last a lifetime. At{" "}
                <span >
                  Hotel Serenity
                </span>
                , your satisfaction is our top priority.
              </p>
            </div>

            {/* Image Section */}
            <div className="about-img">
              <img
                src="https://media.istockphoto.com/id/503016934/photo/entrance-of-luxury-hotel.jpg?s=612x612&w=0&k=20&c=DXFzucB2xWGf3PI6_yjhLKDvrFcGlOpOjXh6KDI8rqU="
                alt="Hotel Exterior"
              />
              <img
                src="https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU="
                alt="Hotel Room"
              />
              <img
                src="https://media.istockphoto.com/id/535914627/photo/elegant-restaurant-interior.jpg?s=612x612&w=0&k=20&c=PaF5lnyEjlgIcFwEik-3uyKncI1zj8FITWcYv8VHWDQ="
                alt="Hotel Dining"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
