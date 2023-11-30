import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';

function Home() {

  return (
    <>
      <PageTitle title={'Welcome to the Mental Health App!'} subtitle={'Learn to manage your mental health while on a mission.'}/>

      {/* Flex row containing two cards */}
      <div className="flex justify-center gap-4 mb-4">
        <Card>
          Hi
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
  </>
  );
};

export default Home;