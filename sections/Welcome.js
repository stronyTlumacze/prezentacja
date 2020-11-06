import React from 'react';
import Aside from '../component/Aside';
import Typed from 'react-typed';
import Image from 'next/image';

function Welcome() {
  return (
    <div className='welcome__container'>
      <Aside title='Welcome' />

      <div className='welcome__wrapper'>
        <div className='welcome__info-box'>
          <div className='welcome__info-box-absolute'>
            <div className='welcome__info-box-absolute-1 '>
              <h1>
                <Typed
                  strings={['Marek Ekspert']}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
              </h1>
              <h2>Tlumacz Jezykow Obcych</h2>
            </div>
            <div className='welcome__info-box-absolute-2 '>
              <p>- Angielski</p>
              <p>- Niemiecki</p>
            </div>
            <div className='welcome__info-box-absolute-3 '>
              <button>
                <a href='#service'>Oferta</a>
              </button>
              <button>
                <a href='#contact'>Kontakt</a>
              </button>
            </div>
          </div>
        </div>

        <div className='welcome__bg'>
            <Image
              src='/welcome-person-circle.png'
              alt='Welcome picture'
              width={310}
              height={420}
            />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
