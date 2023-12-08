import React from 'react';

function ImgCard({ children, link, height = 100, img}) {

  const bgColorClass = 'border border-lightgreen';
  const textColorClass = 'text-darkgreen';

  return (
    <div className="w-[300px] my-auto container items-center">
      <a href={link} className={`${bgColorClass} p-4 rounded-sm shadow-md pb-4 block flex flex-col`}>
        <div className={`${textColorClass} text-2xl font-medium h-[${height}px]`}>{children}</div>
        <img src={img} alt='resource' className={`img-card-img h-[100px] justify-center text-center mx-auto mt-4 bg-transparent`}></img>
      </a>
    </div>
  );
}

export default ImgCard;
