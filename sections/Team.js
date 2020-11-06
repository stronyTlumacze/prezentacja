import React, { useEffect, useContext } from 'react';
import Aside from '../component/Aside';
import { Kvadratbokiem, Linkedin, Kolo, KoloMale } from '../svg/index';
import { Mark } from '../effect/Mark';
import ImageEffect from '../component/ImageEffect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { NewContext } from '../context/index';

function Team() {
  const { hideOrOpen } = useContext(NewContext);

  useEffect(() => {
    Mark('.team__wrapper .title .mark');

    gsap.to('.team__container .CIRCLE svg', {
      scrollTrigger: {
        trigger: '.team__container .CIRCLE',
        toggleActions: 'restart pause reverse pause',
        start: 'top 650px',
        scrub: 1,
      },
      y: 100,
      x: 30,
      duration: 2,
    });

    gsap.to('.team__container .CIRCLE2 svg', {
      scrollTrigger: {
        trigger: '.team__container .CIRCLE2',
        toggleActions: 'restart pause reverse pause',
        start: 'top 650px',
        scrub: 1,
      },
      y: -100,
      duration: 2,
    });

    gsap.to('.team__boxes .SQUARE svg', {
      scrollTrigger: {
        trigger: '.team__boxes .SQUARE',
        toggleActions: 'restart pause reverse pause',
        start: 'top 650px',
        scrub: 1,
      },
      y: -50,
      duration: 2,
    });

    gsap.to('.team__boxes .SQUARE2 svg', {
      scrollTrigger: {
        trigger: '.team__boxes .SQUARE2',
        toggleActions: 'restart pause reverse pause',
        start: 'top 650px',
        scrub: 1,
      },
      y: 50,
      x: 30,
      duration: 2,
    });
  }, []);

  return (
    <div className='team__container' id='team'>
      <Aside title='Team' />
      <div className='CIRCLE'>
        <Kolo />
      </div>
      <div className='CIRCLE2'>
        <KoloMale />
      </div>

      <div className='team__wrapper'>
        <div className='title'>
          <h2>
            <span className='mark'></span>O nas
          </h2>
        </div>
        <div className='team__generalInfo'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non
            mattis non, dignissim non velit. Curabitur consectetur euismod
            lacus, et sagittis mi cursus ut.
          </p>
          <img src='tv.png' onClick={() => hideOrOpen(`url-45`)} />
        </div>
        <div className='team__boxes'>
          <div className='SQUARE'>
            <Kvadratbokiem />
          </div>
          <div className='team__box'>
            <ImageEffect cl='team__img' img='/man.jpg' />

            <h3>Darek Marek</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed tincidunt sem, eget convallis lectus. Donec nibh lectus,
              blandit non mattis non, dignissim non velit.
            </p>
            <div className='team__social'>
              <Linkedin />
            </div>
          </div>
          <div className='SQUARE2'>
            <Kvadratbokiem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
