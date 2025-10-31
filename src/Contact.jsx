import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <section >
        <div >
          {/* Heading */}
          <h2 className="contact-heading ">
            Contact Us
          </h2>

          {/* Contact Info */}
          <div >
            {/* Left Side - Details */}
            <div >
              <p className="contact-qus ">
                Have questions or want to book your stay? We’d love to hear from
                you!
              </p>
              <div className="aboutsection"> 
                <div>
                  <h3 >
                    Our Address
                  </h3>
                  <p>Hotel Serenity</p>
                  <p>123 Luxury Lane</p>
                  <p>Downtown Cityville, 456789</p>
                </div>

                <div>
                  <h3 >
                    Contact
                  </h3>
                  <p>📞 +91 98765 43210</p>
                  <p>📧 contact@hotelserenity.com</p>
                </div>
                <div>
                <h3 >
                  Business Hours
                </h3>
                <p>Monday – Sunday: 24/7</p>
                <p>Restaurant: 7:00 AM – 11:00 PM</p>
                <p>Spa & Wellness: 9:00 AM – 9:00 PM</p>
              </div>
              </div>
              
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <h1 className="about-message">Message</h1>
              <form className="space-y-4">
                <div className="form-section">
                <div className="about-name">
                <p>Name :</p>
                <input
                  type="text"
                  placeholder="Your Name"
                 
                />
                </div>
                <div className="about-email">
                <p>Email :</p>
                <input
                  type="email"
                  placeholder="Your Email"
                />
                </div>
                <div className="about-mes">
                <p>Message :</p>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  
                ></textarea>
                </div>
                <div className="about-but">
                <button
                  type="submit" 
                >
                  Send Message
                </button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
