import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Statistics = (el, fnStart, fnReset, opacity) => {
  return ScrollTrigger.batch(el, {
    start: 'top +700px',
    onEnter: (batch) =>
      gsap.to(batch, {
        scrollTrigger: {
          trigger: el,
        },
        overwrite: true,
        onComplete: () => {
          opacity(true), fnStart();
        },
      }),
    onLeave: (batch) =>
      gsap.to(batch, {
        overwrite: true,
        onComplete: () => {
          fnReset();
        },
      }),
    onEnterBack: (batch) =>
      gsap.to(batch, {
        overwrite: true,
        onComplete: () => {
          opacity(true), fnStart();
        },
      }),
    onLeaveBack: (batch) =>
      gsap.to(batch, {
        overwrite: true,
        onComplete: () => {
          fnReset();
        },
      }),
  });
};
