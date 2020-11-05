import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Image({ cl, img, i }) {
  let klasa;
  let span;
  let wrapper;

  const next = (el) =>
    gsap.to(el, {
      x: '101%',
      duration: 0.5,
      ease: 'Expo.easeInOut',
    });

  const nextBack = (el) =>
    gsap.to(el, {
      x: 0,
      duration: 0.5,
    });

  useEffect(() => {
    klasa = document.querySelector(`.${cl}-grab-${i || ''}`);
    wrapper = klasa.querySelector('.mark-image-wrapper');
    span = klasa.querySelector('.mark-image-span');

    

    ScrollTrigger.batch(wrapper, {
      start: 'top 600px',
      onEnter: (batch) =>
        gsap.to(batch, {
          scrollTrigger: {
            trigger: klasa,
          },
          x: 0,
          overwrite: true,
          ease: 'Expo.easeInOut',
          onComplete: () => next(span),
        }),
      onLeave: (batch) =>
        gsap.to(batch, {
          x: '-100%',
          overwrite: true,
          onComplete: () => nextBack(span),
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          x: 0,
          overwrite: true,
          ease: 'Expo.easeInOut',
          onComplete: () => next(span),
        }),
      onLeaveBack: (batch) =>
        gsap.set(batch, {
          x: '-100%',
          overwrite: true,
          onComplete: () => nextBack(span),
        }),
    });
  }, []);

  return (
    <div className={`${cl} mark-image-container ${cl}-grab-${i || ''}`}>
      <div className='mark-image-wrapper'>
        <img src={img} className='mark-image' />
        <span className='mark-image-span'></span>
      </div>
    </div>
  );
}

export default Image;
