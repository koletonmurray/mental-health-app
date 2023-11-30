import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import logo from '../img/logo.png';

function Home() {

  return (
    <>
      <div className="flex justify-center gap-6 mb-10">
        <div className='w-[35%]'>
          <br/><br/><br/><br/><br/>
          <PageTitle title={'Welcome to Liahona Lifts!'} subtitle={'Learn to manage your mental health while on a mission.'} position='left'/>
        </div>
        <img src={logo} className='h-[350px]' alt='Liahona Lifts logo'/>
      </div>
      {/* Flex row containing two cards */}
      <div className="flex justify-center gap-4 mb-10">
        <Card>
          You can do hard things!
        </Card>

        <Card>
          You're amazing!
        </Card>
      </div>

      {/* Flex row containing two cards */}
      <div className="flex justify-center gap-4 mb-4">
        <Card>
          Looking great!
        </Card>

        <Card>
          Don't forget to smile!
        </Card>
      </div>
      <div className='pb-10'></div>
  </>
  );
};

export default Home;