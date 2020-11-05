import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Mark = (el) => {
    return ScrollTrigger.batch(el, {
        start: 'top +600px',
        onEnter: (batch) =>
          gsap.to(batch, {
            scrollTrigger: {
              trigger: el,
            },
            x: '7%',
            duration: 1,
            overwrite: true,
            ease: 'Power3.easeOut',
          }),
        onLeave: (batch) =>
          gsap.to(batch, {
            x: '100%',
            duration: 1,
            overwrite: true,
             ease: 'Power3.easeOut',
          }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            x: '7%',
            duration: 1,
            overwrite: true,
             ease: 'Power3.easeOut',
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            x: '100%',
            duration: 1,
            overwrite: true,
             ease: 'Power3.easeOut',
          }),
      });
}

export const MarkAll = (el) => {
  return ScrollTrigger.batch(el, {
      start: 'top +630px',
      onEnter: (batch) =>
        gsap.to(batch, {
          scrollTrigger: {
            trigger: el,
          },
          x: '100%',
          duration: 1,
          overwrite: true,
          ease: 'Power3.easeOut',
        }),
      onLeave: (batch) =>
        gsap.to(batch, {
          x: '0%',
          duration: 1,
          overwrite: true,
           ease: 'Power3.easeOut',
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          x: '100%',
          duration: 1,
          overwrite: true,
           ease: 'Power3.easeOut',
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          x: '0%',
          duration: 1,
          overwrite: true,
           ease: 'Power3.easeOut',
        }),
    });
}