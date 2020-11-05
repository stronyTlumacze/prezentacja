import React, { useState, useEffect, useRef, useContext } from 'react';
import { Trojkat, Bad } from '../svg/index';
import { NewContext } from '../context/index';

function Video() {
  const [mouse, setMouse] = useState(false);

  const videoRef = useRef(null);
  const toggleRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  const {
    off,
    openVideo,
    setOpenVideo,
    playMeInCase,
    setPlayMeInCase,
    url
  } = useContext(NewContext);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (localStorage.getItem('initialOpen') === 'true') return;

  //     setOpen(true);
  //     localStorage.setItem('initialOpen', 'true');
  //   }, 1000);
  // }, []);

  useEffect(() => {
    progressRef.current.addEventListener('click', scrub);
    progressRef.current.addEventListener('mousemove', (e) => mouse && scrub(e));
  }, [progressRef]);

  const togglePlay = () => {
    const method = videoRef.current.paused ? 'play' : 'pause';
    videoRef.current[method]();
    setPlayMeInCase(false);
  };

  const updateButton = () => {
    const icon = videoRef.current.paused ? '►' : '❚ ❚';
    toggleRef.current.textContent = icon;
  };

  const handleProgress = () => {
    const percent =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    progressBarRef.current.style.flexBasis = `${percent}%`;
  };

  const scrub = (e) => {
    const scrubTime =
      (e.offsetX / progressRef.current.offsetWidth) * videoRef.current.duration;
    videoRef.current.currentTime = scrubTime;
  };

  useEffect(() => {
    if (!openVideo) {
      videoRef.current.pause();
    }
  }, [openVideo]);

  useEffect(() => {
    videoRef.current.play()
  }, [url]);

  return (
    <div
      className={`interactive ${openVideo && off ? 'open' : ''} ${
        off ? '' : 'moveRight'
      } ${openVideo && !off ? 'openOFF' : ''}`}
    >
      <span className='toggleVideo' onClick={() => setOpenVideo(!openVideo)}>
        {openVideo ? <Bad /> : <Trojkat />}
      </span>

      <div className='player'>
        {playMeInCase && (
          <p className='playme__inCase' onClick={() => togglePlay()}>
            Play me <Trojkat />
          </p>
        )}
        <video
          className='player__video viewer'
          src={url}
          onClick={() => togglePlay()}
          onPlay={() => updateButton()}
          onPause={() => updateButton()}
          onTimeUpdate={() => handleProgress()}
          ref={videoRef}
        ></video>

        <div className='player__controls'>
          <div
            className='progress'
            onMouseDown={() => setMouse(true)}
            onMouseUp={() => setMouse(false)}
            ref={progressRef}
          >
            <div className='progress__filled' ref={progressBarRef}></div>
          </div>
          <button
            className='player__button toggle'
            title='Toggle Play'
            onClick={() => togglePlay()}
            ref={toggleRef}
          >
            ►
          </button>
        </div>
      </div>
    </div>
  );
}

export default Video;
