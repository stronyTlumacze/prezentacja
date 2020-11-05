import React from 'react';
import Slider from 'react-slick';
import Aside from '../component/Aside';
// https://www.stickpng.com/img/download/5eadc67c0008ad0004c7dcff

function Logo() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    pauseOnHover: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='logo__container'>
      <Aside title='Logo' />
      <div className='logo__wrapper'>
        <Slider {...settings}>
          {data.map((el, i) => {
            return (
              <div className='slider-element' key={i}>
                <img src={el.img} alt='' />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Logo;

const data = [
  {
    img: './logo1.png',
  },
  {
    img: './logo2.png',
  },
  {
    img: './logo3.png',
  },
  {
    img: './logo4.png',
  },
  {
    img: './logo5.png',
  },
  {
    img: './logo6.png',
  },
  {
    img: './logo7.png',
  },
  {
    img: './logo8.png',
  },
];
