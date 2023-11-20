import React from 'react';
import PageTitle from '../components/PageTitle';

function Home() {

  const savingsColor = 'bg-blue-100';
  const savingsText = 'text-green-600';
  const goalColor = 'bg-pink-100';
  const goalText = 'text-blue-500';

 
  return (
    <>
      <PageTitle title={'Welcome to the Mental Health App!'} subtitle={'Learn to manage your mental health while on a mission.'}/>

      {/* Flex row containing two cards */}
      <div className="flex justify-center gap-4 mb-4">
        {/* Card */}
        <div className="w-[25%]">
          <div className={`${savingsColor} p-4 rounded-lg shadow-md mb-4`}>
            <h3 className="text-2xl font-bold">Hello</h3>
            <p className={`text-3xl font-bold ${savingsText}`}>Hi</p>
          </div>
        </div>

        {/* Card */}
        <div className="w-[25%]">
          <div className={`${goalColor} p-4 rounded-lg shadow-md mb-4`}>
            <h3 className="text-2xl font-bold">Hey There!</h3>
            <p className={`text-3xl font-bold ${goalText}`}>You're amazing!</p>
          </div>
        </div>
      </div>

      {/* Third Card (on its own row) */}
      <div className='flex justify-center'>
        <div className="bg-green-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-2xl font-bold">Well Hi!</h3>
            <p className="text-3xl font-bold text-green-600 p-1">Looking great!</p>
            <p className="text-lg">Don't forget to smile!</p>
        </div>
      </div>
  </>
  );
};

export default Home;