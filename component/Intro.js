import React, { useEffect } from 'react';
import gsap from 'gsap';

const time = gsap.timeline();
function Intro() {
  useEffect(() => {
    let titleLetters = Array.from(document.querySelectorAll('.intro__title p'));
    time
      .to(titleLetters, {
        ease: 'Power4.easeOut',
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 0.14,
        delay: 0.4,
      }) //1.2
      .to('.intro__title', {
        ease: 'Power4.easeIn',
        duration: 0.8,
        opacity: 1,
        y: '-60vh',
        delay: 0.5,
        stagger: 0.1,
      }) // 2.5
      .to('.intro', {
        ease: 'Power4.easeIn',
        duration: 0.7,
        height: '0vh',
        delay: -0.5,
      }) // 2.7
      .to(document.body, {
        delay: -0.1,
        overflow: 'auto',
        onComplete: () => {
          document
            .querySelector('.layout__container')
            .removeChild(document.querySelector('.intro'));
        },
      });
  }, []);

  return (
    <div className='intro'>
      <div className='intro__title'>
        <div>
          <p>M</p>
          <p>A</p>
          <p>R</p>
          <p>E</p>
          <p>K</p>
        </div>
        <div>
          <p>E</p>
          <p>K</p>
          <p>S</p>
          <p>P</p>
          <p>E</p>
          <p>R</p>
          <p>T</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
