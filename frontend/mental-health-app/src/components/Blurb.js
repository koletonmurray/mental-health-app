import React from 'react';

function Blurb({ children, width }) {
  const blurbWidth = width === 'none' ? '': 'w-[50%]';

  return (
    <div className={`text-left pb-10 text-lightgreen-600 ${blurbWidth} mx-auto`}>
      {children}
    </div>
  );
}

export default Blurb;
