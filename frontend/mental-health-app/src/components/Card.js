import React from 'react';

function Card({ children, link, bgcolor, textcolor, height = 100}) {

  const bgColorClass = bgcolor === 'lightgreen'
  ? 'bg-lightgreen-50'
  : bgcolor === 'darkgreen'
  ? 'bg-darkgreen-50'
  : bgcolor === 'peach'
  ? 'bg-peach-50'
  : bgcolor === 'lemon'
  ? 'bg-lemon-50'
  : 'border border-lightgreen';

  const textColorClass = textcolor === `lightgreen` ? 'text-lightgreen' : 'text-darkgreen'

  return (
    <div className="min-w-[25%] max-w-[300px] container">
      <a href={link} target='_blank' rel="noreferrer" className={`${bgColorClass} p-4 rounded-sm shadow-md pb-4 block`}>
        <div className={`${textColorClass} text-2xl font-medium h-[${height}px]`}>{children}</div>
      </a>
    </div>
  );
}

export default Card;
