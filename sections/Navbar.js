import React, { useState, useContext } from 'react';
// import LanguageSwitcher from './LanguageSwitcher'
import { NewContext } from '../context/index';
import Aside from '../component/Aside';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { off } = useContext(NewContext);

  return (
    <div className='nav__container'>
      <Aside title='Nav' />

      <nav>
        <div className={`${off ? 'normal' : ''} navbar__wrapper`}>
          {/* logo */}
          <div className='logo'>
            <img src='./favicon.ico' />
          </div>
          <div className='menu__container'>
            {/* big menu */}
            <div className='menu'>
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

            {/* hamburger */}
            <div className='hamburger' onClick={() => setOpenMenu(!openMenu)}>
              <div id='bar1' class='bar'></div>
              <div id='bar2' class='bar'></div>
              <div id='bar3' class='bar'></div>
            </div>
          </div>
        </div>

        {/* small menu */}
        <div className={`menu-small ${openMenu ? 'active' : ''}`}>
          <ul>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Portfolio</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <p className='close-small' onClick={() => setOpenMenu(!openMenu)}>
              X
            </p>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
