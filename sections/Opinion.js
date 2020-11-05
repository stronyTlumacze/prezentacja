import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Aside from '../component/Aside';
import { Mark } from '../effect/Mark';

function Opinion() {
  useEffect(() => {
    Mark('.opinion__wrapper .title .mark');
  }, []);

  var settings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    pauseOnHover: false,
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
    <div className='opinion__container'>
      <Aside title='Opinie' />
      <div className='opinion__wrapper'>
        <div className='title'>
          <h2>
            <span className='mark'></span>Opinie
          </h2>
        </div>
        <Slider {...settings}>
          {data.map((el, i) => {
            return (
              <div className='slider-element' key={el.i}>
                <h3>{el.name}</h3>
                <p>
                  <i>{el.text}</i>
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Opinion;

const data = [
  {
    name: 'Maciej',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Tomasz',
    text: 'Donec nibh lectus, blandit non mattis non, dignissim non velit.',
  },
  {
    name: 'Marta',
    text: 'Mauris sed tincidunt sem, eget convallis lectus.',
  },
  {
    name: 'Ela',
    text: 'Donec nibh lectus, blandit non mattis non, dignissim non velit.',
  },
  {
    name: 'Izabela',
    text: 'Mauris sed tincidunt sem, eget convallis lectus.',
  },
];
