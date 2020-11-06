import React, { useEffect } from 'react';
import Aside from '../component/Aside';
import { Mark } from '../effect/Mark';
import ImageEffect from '../component/ImageEffect';
import { Koleczka, KoloKolo } from '../svg/index';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Certificate() {
  useEffect(() => {
    Mark('.certificate__wrapper .title .mark');

    gsap.to('.certificate__wrapper .CIRCLE svg', {
      scrollTrigger: {
        trigger: '.certificate__wrapper .CIRCLE',
        toggleActions: 'restart pause reverse pause',
        start: 'top 650px',
        scrub: 1,
      },
      y: 100,
      x: 10,
      duration: 2,
    });

    gsap.to('.certificate__wrapper .CIRCLE2 svg', {
      scrollTrigger: {
        trigger: '.certificate__wrapper .CIRCLE2',
        toggleActions: 'restart pause reverse pause',
        start: 'top 650px',
        scrub: 1,
      },
      y: 60,
      x: 10,
      duration: 2,
    });
  }, []);
  return (
    <div className='certificate__container'>
      <Aside title='Certyfikaty' />

      <div className='certificate__wrapper'>
        <div className='CIRCLE'>
          <Koleczka />
        </div>
        <div className='CIRCLE2'>
          <KoloKolo />
        </div>
        <div className='title'>
          <h2>
            <span className='mark'></span>Certyfikaty
          </h2>
        </div>
        <p className='certificate__generalInfo'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
          tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non
          mattis non, dignissim non velit. Curabitur consectetur euismod lacus,
          et sagittis mi cursus ut.
        </p>
        <div className='certificate__boxes'>
          {data.map((el, i) => {
            return (
              <div
                className={`certificate__box ${i % 2 === 0 ? 'reverse' : ''}`}
                key={i}
              >
                <ImageEffect cl='certificate__img' img={el.img} i={i} />
                <div className='certificate__info'>
                  <h3>{el.title}</h3>
                  <p>{el.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Certificate;

const data = [
  {
    img: '/certyfikat1.jpg',
    title: 'Tlumacz przysiegly level A',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut. ',
  },
  {
    img: '/certyfikat2.jpg',
    title: 'Tlumacz przysiegly level B',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut. ',
  },
];
