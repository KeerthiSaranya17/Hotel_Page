import React from "react";
import Contact from "./Contact";
import meeting from '../assets/meeting.jpg';
import Private from '../assets/private.jpg';
import wedding from '../assets/wedding.jpg';

const MeetingAndEvents = () => {
  return (
    <div className="meetings">
      <img src={meeting} />
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
          <img src={meeting} alt="Meeting" />
          <div className="me-overlay">
            <span>Corporate Meetings</span>
          </div>
        </div>

        <div className="me-card">
          <img src={Private} alt="Event" />
          <div className="me-overlay">
            <span>Private Events</span>
          </div>
        </div>

        <div className="me-card">
          <img src={wedding} alt="Wedding" />
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
