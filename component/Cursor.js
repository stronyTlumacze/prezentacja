import React, { useEffect } from 'react';

function Cursor() {
  let mouseCursor;
  let allButton;
  let allA;

  useEffect(() => {
    mouseCursor = document.querySelector('.cursor');

    allButton = Array.from(document.querySelectorAll('button'));
    allA = Array.from(document.querySelectorAll('a'));

    function cursor(e) {
      mouseCursor.style.top = e.pageY + 'px';
      mouseCursor.style.left = e.pageX + 'px';
    }
    window.addEventListener('mousemove', cursor);

    return () => window.removeEventListener('mousemove', cursor);
  }, []);

  useEffect(() => {
    allButton.forEach((el) =>
      el.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor__button');
      })
    );

    allButton.forEach((el) =>
      el.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor__button');
      })
    );

    return () =>
      allButton.forEach((el) =>
        el.addEventListener('mouseleave', () => {
          mouseCursor.classList.remove('cursor__button');
        })
      );
  }, []);

  useEffect(() => {
    allA.forEach((el) =>
      el.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor__button');
      })
    );

    allA.forEach((el) =>
      el.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor__button');
      })
    );

    return () =>
    allA.forEach((el) =>
        el.addEventListener('mouseleave', () => {
          mouseCursor.classList.remove('cursor__button');
        })
      );
  }, []);

  return <div className='cursor'></div>;
}

export default Cursor;
