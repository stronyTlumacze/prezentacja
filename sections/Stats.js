import React, { useEffect, useState } from 'react';
import Aside from '../component/Aside';
import CountUp, { useCountUp } from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { Statistics } from '../effect/Statistics'

function Stats() {
  const [opacityOne, setOpacityOne] = useState(false);
  const [opacityTwo, setOpacityTwo] = useState(false);
  const [opacityThree, setOpacityThree] = useState(false);

  const { countUp: countOne, start: startOne, reset: resetOne } = useCountUp({
    start: 0,
    end: 13,
    duration: 5,
  });
  const { countUp: countTwo, start: startTwo, reset: resetTwo } = useCountUp({
    start: 0,
    end: 400,
    duration: 5,
  });
  const { countUp: countThree, start: startThree, reset: resetThree } = useCountUp({
    start: 0,
    end: 77,
    duration: 5,
  });

  useEffect(() => {
    Statistics('.stats__box-1', startOne, resetOne, setOpacityOne)
    Statistics('.stats__box-2', startTwo, resetTwo, setOpacityTwo)
    Statistics('.stats__box-3', startThree, resetThree, setOpacityThree)
  }, []);

  return (
    <div className='stats__container'>
      <Aside title='Statystyki' />

      <div className='stats__wrapper'>
        <div className='stats__boxes'>
          {/* box */}
          <div className='stats__box stats__box-1'>
            <h3>Liczba lat na rynku</h3>
            <p style={{opacity: opacityOne ? '1' : '0'}}>{countOne}</p>
          </div>
          <div className='stats__box stats__box-2'>
            <h3>Lorem ipsum dolor</h3>
            <p style={{opacity: opacityTwo ? '1' : '0'}}>{countTwo}</p>
          </div>
          <div className='stats__box'>
            <img src='./stats.png' />
          </div>
          <div className='stats__box stats__box-3'>
            <h3>Lorem ipsum dolor</h3>
            <p style={{opacity: opacityThree ? '1' : '0'}}>{countThree}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
