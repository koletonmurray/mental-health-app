import React from 'react';

function Card({ children, link, bgcolor = 'peach', textcolor = 'lightgreen', height = 100}) {

  const bgColorClass = `bg-lemon-50`;
  const textColorClass = `text-darkgreen`;

  return (
    <div className="w-[25%] border ">
      <a href={link} target='_blank' rel="noreferrer" className={`${bgColorClass} p-4 rounded-sm shadow-md pb-4 block`}>
        <div className={`${textColorClass} text-3xl font-medium h-[${height}px]`}>{children}</div>
      </a>
    </div>
  );
}

export default Card;
