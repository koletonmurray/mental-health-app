import React from 'react';

function PageTitle({title, subtitle, position, pbottom, ptop}) {
    const setPosition = position === 'left' ? 'text-left' : 'text-center';
    const setPBottom = pbottom === 5 ? 'pb-5' : 'pb-10';
    const setPTop = ptop === 5 ? 'pt-0' : 'pt-5';


    return (
        <div>
            <div className={`${setPosition} ${setPBottom} text-sunset-500 ${setPTop}`}>
                {title && (
                    <h1 className='text-4xl font-bold '>{title}</h1>
                )}
                {subtitle && (
                    <h2 className={`text-2xl pt-2 font-semibold text-darkgreen ${setPosition}`}>{subtitle}</h2>
                )}
            </div>
        </div>
  );
}

export default PageTitle;