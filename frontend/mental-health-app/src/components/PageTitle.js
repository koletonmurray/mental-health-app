import React from 'react';

function PageTitle({title, subtitle, position}) {
    const setPosition = position === 'left' ? 'text-left' : 'text-center';

    return (
        <div>
            <div className={`${setPosition} pb-10 text-sunset-500 pt-5`}>
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