import React from 'react';
import { Linkedin } from '../svg/index';
import Aside from '../component/Aside';

function Footer() {
  return (
    <footer>
      <Aside title='Footer' />

      <div className='footer__wrapper'>
        <div className='footer__box'>
          <div className='footer__one'>
            <ul>
              <li>
                <a href='#service'>Oferta</a>
              </li>
              <li>
                <a href='#team'>O nas</a>
              </li>
              <li>
                <a href='#price'>Cennik</a>
              </li>
              <li>
                <a href='#contact'>Kontakt</a>
              </li>
            </ul>
          </div>
          <div className='footer__two'>
            <div className='footer__two-social'>
              <Linkedin />
              <Linkedin />
            </div>
          </div>
        </div>

        <div className='footer__law'>
          <img src='./favicon.ico' />
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </footer>
  );
}

// export default withTranslation('footer')(Footer)
export default Footer;
