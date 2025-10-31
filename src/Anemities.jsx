import React from 'react'
import { useNavigate } from 'react-router-dom'

const Anemities = () => {
  const Navigate = useNavigate();
  return (
    <section className="category_section">
        <div className="category">
          <h2>Our Amenities</h2>
        </div>
        <div className="categories">
          <div className="category-container">
            <img src="https://media.istockphoto.com/id/104287144/photo/hotel-room-interior.jpg?s=612x612&w=0&k=20&c=fLHp1_wxGdWC2vvwUzUxKJVhSoWu3vWKHTlNw-nQeWs=" />
            <div className="tag-section">
              <h3>Accomodations</h3>
              <p>
                Experience ultimate comfort in our elegantly designed rooms and
                suites, equipped with modern amenities and offering breathtaking
                views for a relaxing stay.
              </p>
              <div>
              <button onClick={()=>Navigate("/accomodations")} className="explore-button">Explore More</button>
            </div>
            </div>
            
          </div>
          <div className="category-container">
            <img src="https://img.freepik.com/free-photo/luxury-dinner-table-hotel_1150-11071.jpg" />
            <div className="tag-section">
            <h3>Dinning Options</h3>
            <p>
              Savor world-class cuisine at our fine dining restaurant, enjoy
              international flavors, or unwind with light bites and refreshing
              beverages at our lounge and cafe.
            </p>
            <div>
              <button onClick={()=>Navigate("/dinneroptions")} className="explore-button">Explore More</button>
            </div>
            </div>
          </div>
          <div className="category-container">
            <img src="https://civichotel.ca/wp-content/uploads/2018/08/meeting-slide3-1920x1179.jpg" />
            <div className="tag-section">
            <h3>Meetings and Events</h3>
            <p>
              Host memorable conferences, weddings, or private gatherings in our
              spacious event venues, fully equipped with modern technology and
              professional services.
            </p>
            <div>
              <button onClick={()=>Navigate("/meetingandevents")} className="explore-button">Explore More</button>
            </div>
            </div>
          </div>
          <div className="category-container">
            <img src="https://guam.crowneplaza.com/wp-content/uploads/2023/04/CPGuam-PoolSunrise-458-2_3000px-1-1024x683.jpg" />
            <div className="tag-section">
            <h3>Spa and Swimming Pool</h3>
            <p>
              Relax, refresh, and rejuvenate at our wellness center, offering
              soothing spa therapies and a sparkling swimming pool—the perfect
              escape for both mind and body.
            </p>
            <div>
              <button onClick={()=>Navigate("/spaandswimmingpool")} className="explore-button">Explore More</button>
            </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Anemities