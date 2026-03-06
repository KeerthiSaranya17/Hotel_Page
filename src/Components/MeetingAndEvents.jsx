import React from "react";
import Contact from "./Contact";

const MeetingAndEvents = () => {
  return (
    <div className="meetings">
      <img src="meeting.jpg" />
      <h1>Meeting and Events</h1>
      <h4>Plan your meetings and events with us</h4>
      <p>
        Bring people together in a space where ideas flow and moments turn into
        memories. Our thoughtfully designed Meetings & Events venues are perfect
        for business gatherings, weddings, parties, and special occasions. With
        personalized service, modern facilities, and exceptional hospitality, we
        make every event truly special.
      </p>
      <div className="me-grid">
        <div className="me-card">
          <img src="meeting.jpg" alt="Meeting" />
          <div className="me-overlay">
            <span>Corporate Meetings</span>
          </div>
        </div>

        <div className="me-card">
          <img src="private.jpg" alt="Event" />
          <div className="me-overlay">
            <span>Private Events</span>
          </div>
        </div>

        <div className="me-card">
          <img src="wedding.jpg" alt="Wedding" />
          <div className="me-overlay">
            <span>Wedding Celebrations</span>
          </div>
        </div>
      </div>
      <div>
        <Contact/>
      </div>
    </div>
  );
};

export default MeetingAndEvents;
