import React from 'react';

function Blurb({ children }) {
  return (
    <div className={`text-left pb-10 text-lightgreen-600 w-[50%] mx-auto`}>
      {children}
    </div>
  );
}

export default Blurb;
