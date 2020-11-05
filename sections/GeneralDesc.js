import React, { useContext, useEffect } from 'react';
import { Mark } from '../effect/Mark';
import Aside from '../component/Aside';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { ShowUp } from '../effect/ShowUp';
import { NewContext } from '../context/index';

function GeneralDesc() {
  const { hideOrOpen } = useContext(NewContext);
  useEffect(() => {
    Mark('.generalDesc__wrapper .title .mark');

    let elements = Array.from(document.querySelectorAll('.generalDesc__box'));

    ShowUp(elements);
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(elements, { y: 40, opacity: 0 })
    );
  }, []);
  return (
    <div className='generalDesc__container'>
      <Aside title='Opis ogolny' />

      <div className='generalDesc__wrapper'>
        <div className='title'>
          <h2>
            <span className='mark'></span>Sprawdz nas
          </h2>
        </div>
        <div className='generalDesc__boxes'>
          {/* box */}
          {data.map((el,i) => (
            <div className='generalDesc__box' key={el.img}>
              <div className='generalDesc__box-top'>
                <img src={`./${el.img}`} />
                <h3>{el.title}</h3>
              </div>
              <div className='generalDesc__box-bottom'>
                <p>{el.text}</p>
                {el.video && <img src='tv.png' onClick={() => hideOrOpen(`url-${i}`)} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GeneralDesc;

const data = [
  {
    img: 'time.png',
    title: 'Potrzebujesz szybkiego tlumaczenia?',
    text:
      'Nasza firma jest do Twojej dyspozycji 24 godzin na dobe. Robimy tlumaczenia ekspresowe w trybie natychmiastowym. Tego typu tlumaczenia sa wykonywane przez 2 tlumaczy jednoczesnie.',
    video: true,
  },
  {
    img: 'hierarchicalstructure.png',
    title: 'Lorem ipsum dolor sit amet?',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut.',
    video: true,
  },
  {
    img: 'goal.png',
    title: 'Lorem ipsum dolor sit amet?',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut.',
    video: false,
  },
  {
    img: 'calculator.png',
    title: 'Lorem ipsum dolor sit amet?',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tincidunt sem, eget convallis lectus. Donec nibh lectus, blandit non mattis non, dignissim non velit. Curabitur consectetur euismod lacus, et sagittis mi cursus ut.',
    video: false,
  },
];
