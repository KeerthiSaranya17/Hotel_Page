
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hotel1 from '../assets/hotel_1.png';
import Hotel2 from '../assets/hotel_2.jpg';
import Hotel3 from '../assets/hotel_3.jpg';
import Hotel4 from '../assets/hotel_4.jpg';
const HotelSlider = () => {

  
  const settings = {
    // bool:true,
     dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false,
pauseOnFocus: false,

  };
  return (
    <div className='slider'>
      <Slider {...settings}>
        <div>
          <img src={Hotel1} alt="hotel1" />
        </div>
        <div>
          <img src={Hotel2} alt="hotel2" />
        </div>
        <div>
          <img src={Hotel3} alt="hotel3"  />
        </div>
        <div>
          <img src={Hotel4} alt="hotel4"  />
        </div>
      </Slider>
    </div>
  )
}

export default HotelSlider
