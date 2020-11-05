import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const ShowUp = (elements) => {
  return ScrollTrigger.batch(elements, {
    onEnter: (batch) =>
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        overwrite: true,
        duration: 1,
        ease: 'Power3.easeOut',
      }),
    onLeave: (batch) =>
      gsap.to(batch, {
        y: -40,
        opacity: 0,
        overwrite: true,
        duration: 1,
        ease: 'Power3.easeOut',
      }),
    onEnterBack: (batch) =>
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        overwrite: true,
        duration: 1,
        ease: 'Power3.easeOut',
      }),
    onLeaveBack: (batch) =>
      gsap.set(batch, {
        y: 40,
        opacity: 0,
        overwrite: true,
        duration: 1,
        ease: 'Power3.easeOut',
      }),
  });
};
