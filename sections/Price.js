import React, { useEffect } from 'react';
import Aside from '../component/Aside';
import { MarkAll } from '../effect/Mark';
import { Koleczka, KoloKolo } from '../svg/index';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Price() {
  useEffect(() => {
    MarkAll('.price__wrapper .price__title .markAll');

    gsap.to('.price__wrapper .CIRCLE svg', {
      scrollTrigger: {
        trigger: '.price__wrapper .CIRCLE',
        toggleActions: 'restart pause reverse pause',
        start: 'top 650px',
        scrub: 1,
      },
      y: -70,
      duration: 2,
    });

    gsap.to('.price__wrapper .CIRCLE2 svg', {
      scrollTrigger: {
        trigger: '.price__wrapper .CIRCLE2',
        toggleActions: 'restart pause reverse pause',
        start: 'top 650px',
        scrub: 1,
      },
      y: 60,
      x: 30,
      duration: 2,
    });
  }, []);

  return (
    <div className='price__container' id='price'>
      <Aside title='Price' />

      <div className='price__wrapper'>
        <div className='CIRCLE'>
          <Koleczka />
        </div>
        <div className='CIRCLE2'>
          <KoloKolo />
        </div>
        <div className='price__title'>
          <h2>
            <span className='markAll'></span>Cennik
          </h2>
        </div>

        <div className='price__boxes'>
          <div className='price__boxes__wrapper'>
            {data.map((el) => {
              return (
                <div className='price__box' key={el.price}>
                  <img src={el.img} />
                  <div className='price__info'>
                    <h3>{el.text}</h3>
                    <p>{el.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;

const data = [
  {
    img: './price-focus.png',
    text: 'Tlumaczenie zwykle',
    price: '30PLN/strona',
  },
  {
    img: './price-medal.png',
    text: 'Lorem ipsum dolor sit amet',
    price: '20PLN/strona',
  },
  {
    img: './price-network.png',
    text: 'Lorem ipsum dolor sit amet',
    price: '70PLN/strona',
  },
  {
    img: './price-file.png',
    text: 'Lorem ipsum dolor sit amet',
    price: '10PLN/strona',
  },
];
