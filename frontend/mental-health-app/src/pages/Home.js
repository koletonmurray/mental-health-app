import React from 'react';
import PageTitle from '../components/PageTitle';
import ImgCard from '../components/ImgCard';
import logo from '../img/logo.png';
import resources from '../img/resources_cropped.png';
import track from '../img/track_cropped.png';
import gethelp from '../img/getHelp_cropped.png';
import activities from '../img/activities_cropped.png';
import face from '../img/face.png';
import Blurb from '../components/Blurb';

function Home() {

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className='w-[35%]'>
          <br/><br/><br/><br/><br/>
          <PageTitle title={'Welcome to Liahona Lifts!'} subtitle={'Learn to manage your mental health while on a mission.'} position='left'/>
        </div>
        <img src={logo} className='h-[350px]' alt='Liahona Lifts logo'/>
      </div>
      
      {/* Flex row containing two cards */}
      <div className={`flex flex-wrap justify-center gap-4 ${window.innerWidth > '700px' ? 'mb-10' : 'mb-4'}`}>
        <ImgCard img={activities} link={'/activity'}>
          Activities and Games to Promote Mental Health
        </ImgCard>

        <ImgCard img={resources} link={'/resources'}>
          Resources for Dealing with Difficulty Times
        </ImgCard>
      </div>

      {/* Flex row containing two cards */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <ImgCard img={track} link={'/track'}>
          Track How You're Feeling Every Day
        </ImgCard>

        <ImgCard img={gethelp} link={'/get-help' }>
          Where to Get Help
        </ImgCard>
      </div>
      <div className='pb-10'></div>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <img src={face} className='h-[200px] mt-2' alt='Graphic of man and his brain'/>
        <div className='w-[35%]'>
          <PageTitle title={'We all Struggle!'} position='left'/>
          <Blurb width={'none'}>Everybody goes through difficult times. Missions are stressful, demanding, and uncomfortable. Use the resources contained in this website to improve your mental health and make the most of your mission!</Blurb>
        </div>
      </div>
  </>
  );
};

export default Home;