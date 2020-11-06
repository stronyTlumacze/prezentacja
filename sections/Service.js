import React, { useState, useEffect, useContext } from 'react';
import Aside from '../component/Aside';
import { Mark } from '../effect/Mark';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import ImageEffect from '../component/ImageEffect'
import { NewContext } from '../context/index';

function Service() {
  const [id, setId] = useState(1);
  const { hideOrOpen } = useContext(NewContext);
  useEffect(() => {
    Mark('.service__wrapper .title .mark');
  }, []);

  return (
    <div className='service__container' id='service'>
      <Aside title='Serwis' />

      <div className='service__wrapper'>
        <div className='title'>
          <h2>
            <span className='mark'></span>Serwis
          </h2>
        </div>
        <p className='service__generalInfo'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
          tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non
          mattis non, dignissim non velit. Curabitur consectetur euismod lacus,
          et sagittis mi cursus ut.
        </p>
        <div className='box-switcher'>
          <button onClick={() => setId(1)}>
            <span>Tlumaczenie przysiegle</span>
          </button>
          <button onClick={() => setId(2)}>
            <span>Lorem ipsum dolor sit</span>
          </button>
          <button onClick={() => setId(3)}>
            <span>Lorem ipsum dolor sit</span>
          </button>
          <button onClick={() => setId(4)}>
            <span>Lorem ipsum dolor sit</span>
          </button>
        </div>
        <div className='service__boxes'>
          {data.map((el, i) => {
            if (el.id === id) {
              return (
                <div className='service__box' key={el.id}>
                  <ImageEffect cl='service__image' img={el.img}/>
                  <div className='service__info'>
                    <h2>{el.title}</h2>
                    <p>{el.text}</p>
                    {el.video && <img src='tv.png' onClick={() => hideOrOpen(`url-${i}`)} />}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;

const data = [
  {
    id: 1,
    img: '/service1.jpg',
    title: 'Tlumaczenia przysiegle',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut.',
    video: true,
  },
  {
    id: 2,
    img: '/service2.jpg',
    title: 'Lorem ipsum dolor sit amet',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut.',
    video: true,
  },
  {
    id: 3,
    img: '/service3.jpg',
    title: 'Lorem ipsum dolor sit amet',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut.',
    video: false,
  },
  {
    id: 4,
    img: '/service4.jpg',
    title: 'Lorem ipsum dolor sit amet',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut.',
    video: false,
  },
];
