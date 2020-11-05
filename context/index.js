import React, { createContext, useReducer, useEffect, useState } from 'react';

export const NewContext = createContext();

const NewContextProvider = ({ children }) => {
  // Aside
  const [off, setOff] = useState(false);
  const [hover, setHover] = useState(false);
  // Video
  const [openVideo, setOpenVideo] = useState(false);
  const [playMeInCase, setPlayMeInCase] = useState(true);
  const [url, setUrl] = useState(true);

  const hideOrOpen = (newUrl) => {
    if(openVideo){
      setUrl(newUrl)
      return
    }

    setUrl(newUrl)
    setPlayMeInCase(true);
    setOpenVideo(!openVideo);
  };

  return (
    <NewContext.Provider
      value={{
        off,
        setOff,
        hover,
        setHover,
        openVideo,
        setOpenVideo,
        playMeInCase,
        setPlayMeInCase,
        hideOrOpen,
        url,
        setUrl
      }}
    >
      {children}
    </NewContext.Provider>
  );
};

export default NewContextProvider;
