import React, { useState, useEffect } from 'react';
import Aside from '../component/Aside';
import Email from 'react-email-autocomplete';
import { Mark } from '../effect/Mark';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { ShowUp } from '../effect/ShowUp';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    Mark('.contact__wrapper .title .mark');

    let elements = ['.contact__box form', '.contact__box .contact__info']

    ShowUp(elements);
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(elements, { y: 40, opacity: 0 })
    );
  }, []);

  const submit = (e) => {
    e.preventDefault();
  };

  const customDomains = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
    'interia.pl',
    'wp.pl',
  ];

  return (
    <div className='contact__container' id='contact'>
      <Aside title='Kontakt' />

      <div className='contact__wrapper'>
      <div className='title'>
          <h2>
            <span className='mark'></span>Kontakt
          </h2>
        </div>
        <div className='contact__box'>
          <form onSubmit={(e) => submit(e)}>
            <input
              placeholder='Imie'
              type='text'
              onChange={(e) => setName(e.target.value)}
              name='name'
            />
            <Email
              className='form-control'
              placeholder='Podaj swoj adres e-mail'
              domains={customDomains}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder='Wiadomosc'
              type='text'
              rows='8'
              onChange={(e) => setMsg(e.target.value)}
              name='msg'
            />
            <button>
              <span>Wyslij</span>
            </button>
          </form>
          <div className='contact__info'>
            <img src='./map.png' />
            <button>
              <span>Mapa</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
