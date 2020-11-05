import React, { useEffect, useContext } from 'react';
import Aside from '../component/Aside';
import { Mark } from '../effect/Mark';
import Image from '../component/Image'
import { Kvadratbokiem } from '../svg/index'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { NewContext } from '../context/index';

function Presentation() {
  const { hideOrOpen } = useContext(NewContext);
  useEffect(() => {
    Mark('.presentation__wrapper .title .mark');

    gsap.to('.SQUARE svg', {
      scrollTrigger: {
        trigger: '.SQUARE',
        toggleActions: 'restart pause reverse pause',
        start: 'top 650px',
        scrub: 1,
      },
      y: -10,
      duration: 2,
    });

    gsap.to('.SQUARE2 svg', {
      scrollTrigger: {
        trigger: '.SQUARE2',
        toggleActions: 'restart pause reverse pause',
        start: 'top 650px',
        scrub: 1,
      },
      x: 30,
      duration: 2,
    });
  }, []);
  return (
    <div className='presentation__container'>
      <Aside title='Presentation' />

      <div className='presentation__wrapper'>
        <div className='SQUARE'>
          <Kvadratbokiem />
        </div>
            <div className='SQUARE2'>
          <Kvadratbokiem />
        </div>
        <div className='title'>
          <h2>
            <span className='mark'></span>Prezentacje
          </h2>
        </div>
        <div className='presentation__generalInfo'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non
            mattis non, dignissim non velit. Curabitur consectetur euismod
            lacus, et sagittis mi cursus ut.
          </p>
          <img src='tv.png' onClick={() => hideOrOpen(`url-999`)}/>
        </div>
        <div className='presentation__boxes'>
          {data.map((el, i) => {
            return (
              <div className='presentation__box' key={el.title}>
                <Image cl='presentation__image' img={el.img} i={i}/>
                <h3>{el.title}</h3>
                <p>{el.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Presentation;

const data = [
  {
    img: './presentation1.jpg',
    title: 'Lorem ipsum dolor sit',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut. ',
    btn: '#',
  },
  {
    img: './presentation2.jpg',
    title: 'Lorem ipsum dolor sit',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut. ',
    btn: '#',
  },
  {
    img: './presentation3.jpg',
    title: 'Lorem ipsum dolor sit',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut. ',
    btn: '#',
  },
  {
    img: './presentation4.jpg',
    title: 'Lorem ipsum dolor sit',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut. ',
    btn: '#',
  },
];
