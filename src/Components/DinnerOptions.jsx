import React from "react";
import Contact from "./Contact";

const DinnerOptions = () => {
  return (
    <div className="dinningoptions">
      <img className="dinning-img" src="Dinning options.jpg" />
      <h1 className="dinning-heading">DinnerOptions</h1>
      <h4>The Square</h4>
      <p>
        An all-day dining multi-cuisine Restaurant, The Square is rated amongst
        the top 5 restaurants in Visakhapatnam. It is extremely popular for its
        delicacies and its Lavish International and Indian cuisine Buffet spread
        for Breakfast, lunch and Dinner.
      </p>
      <h4>Zaffran</h4>
      <p>
        An extraordinary fine dining Indian speciality restaurant with exotic
        veg and non veg for succulent Kebabs & Biryani, enjoy the exquisite
        Indian cuisine at the specialty restaurant, while you cherish the cosy
        ambience watching the enigmatic view of the Bay of Bengal.
      </p>
      <h4>Red Bowl</h4>
      <p>
        The rooftop restaurant is a dynamic and innovative restaurant that
        invites guests on a culinary journey through the diverse and flavorful
        cuisines of Asia creating an immersive experience where the senses are
        awakened and traditional dishes are reimagined with a contemporary
        twist.
      </p>
      <div className="dinning-section">
        <div className="dinning-category" >
          <img src="Square.jpg" />
          <div className="dinning-items">
          <h5>THE SQUARE</h5>
          <p>
            {" "}
            An all-day dining multi-cuisine Restaurant, The Square is rated
            amongst the top 5 restaurants in Visakhapatnam. It is extremely
            popular for its delicacies and its Lavish International and Indian
            cuisine Buffet spread for Breakfast, lunch and Dinner.
          </p>
          </div>
        </div>
        <div className="dinning-category">
          <img src="zaffran.jpg" />
          <div className="dinning-items">
          <h5>Zaffran</h5>
          <p>
            An extraordinary fine dining Indian speciality restaurant with
            exotic veg and non veg for succulent Kebabs & Biryani, enjoy the
            exquisite Indian cuisine at the specialty restaurant, while you
            cherish the cosy ambience watching the enigmatic view of the Bay of
            Bengal.
          </p>
          </div>
        </div >
        <div className="dinning-category">
          <img src="red bowl.jpg " />
          <div className="dinning-items">
          <h5>Red Bowl</h5>
          <p>
            The rooftop restaurant is a dynamic and innovative restaurant that
            invites guests on a culinary journey through the diverse and
            flavorful cuisines of Asia creating an immersive experience where
            the senses are awakened and traditional dishes are reimagined with a
            contemporary twist.
          </p>
          </div>
        </div>
      </div>
      <div>
        <Contact/>
      </div>
    </div>
  );
};

export default DinnerOptions;
