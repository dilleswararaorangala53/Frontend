// Home.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import NotificationBar from './NotificationBar';
import NewsEvents from './NewsEvents';
import image1 from '../assets/image1.jpg';
import image3 from '../assets/image3.jpg';
import Notifications from './Notifications';
import './Home.css';
import Mobilefooter from '../components/Mobilefooter';

const Home = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className='home-container'>
      <div className='home-img'>
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Slide 1" />
          </div>
          <div>
            <img src={image3} alt="Slide 2" />
          </div>
        </Slider>
      </div>
      <div className="notification-container">
        
        <div className="event-box" style={{marginTop:"20px",marginRight:"100px"}}>
          <NewsEvents />
        </div>
        <div className="notification-box">
          <Notifications />
        </div>
      </div>
      <Mobilefooter />
    </div>
  );
};

export default Home;
