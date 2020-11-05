import React, { useState, useEffect } from 'react';
import Aside from '../component/Aside';
import { MarkAll } from '../effect/Mark';

function Gift() {
  const [emailEbook, setEmailEbook] = useState('');

  const submitEbook = (e) => {
   e.preventDefault();

    // action
    // fetch(``, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email: emailEbook }),
    // });

    // after action
    setEmailEbook('');
  };
  return (
    <div className='gift__container'>
      <Aside title='Prezent' />

      <div className='gift__wrapper'>
        <div className='gift__info'>
          <div>
            <h2>
              Darmowa porada
            </h2>
          </div>

          <form onSubmit={(e) => submitEbook(e)}>
            <input
              type='email'
              onChange={(e) => setEmailEbook(e.target.value)}
              placeholder='Podaj swoj adres e-mail'
            />
            <button>
              <span>Zdobadz porade</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Gift;
