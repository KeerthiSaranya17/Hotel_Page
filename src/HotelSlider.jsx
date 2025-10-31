
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
          <img src="/hotel_1.png" alt="hotel1" />
        </div>
        <div>
          <img src="/hotel_2.jpg" alt="hotel2" />
        </div>
        <div>
          <img src="/hotel_3.jpg" alt="hotel3"  />
        </div>
        <div>
          <img src="/hotel_4.jpg" alt="hotel4"  />
        </div>
      </Slider>
    </div>
  )
}

export default HotelSlider
