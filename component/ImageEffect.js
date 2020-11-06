import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';

function ImageEffect({ cl, img, i }) {
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

    let span = document.createElement('span')
    span.classList.add('mark-image-span')
    wrapper.firstChild.firstChild.appendChild(span)

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
        <Image
          src={img}
          width={400}
          height={310}
          className='mark-image'
        />
      </div>
    </div>
  );
}

export default ImageEffect;
