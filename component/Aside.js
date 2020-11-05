import React, { useContext } from 'react';

import { NewContext } from '../context/index';

function Aside({title}) {
  const { off, hover } = useContext(NewContext);
  return (
    <aside className={`${off ? 'off' : ''} ${hover ? 'hover' : ''}`}>
      <p>{title}</p>
    </aside>
  );
}

export default Aside;
