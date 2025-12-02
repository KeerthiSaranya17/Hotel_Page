import React from "react";

const Contact = () => {
  return (
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
              {/* <li><a href="/contact" >Contact</a></li> */}
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
  );
};

export default Contact;
