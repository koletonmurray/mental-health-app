import React from 'react';
import PageTitle from '../components/PageTitle';
import Blurb from '../components/Blurb';

function Activities() {

    const activities =
    {
        "Check-in": 
        {
            "name": "Check-in",
            "description": "Take 30 seconds to tell your companion how you are doing.",
            "example": "I'm feeling a little stressed out because our last two investigators fell through."
        },
        "Fun Facts": 
        {
            "name": "Fun Facts",
            "description": "Share a fun fact about yourself with your companion. Try to keep it unique!",
            "example": "I have a pet turtle named Squirtle."
        },
        "Meditation":
        {
            "name": "Meditation",
            "description": "Sit at your desk and take 30 seconds to meditate and clear your mind.",
            "example": "Breathe in, breathe out."
        },
        "Write a Letter":
        {
            "name": "Write a Letter",
            "description": "Write a letter to a family member or friend. You can send it later.",
            "example": "Dear mom, I love you."
        },
        "Gratitude Journaling":
        {
            "name": "Gratitude Journaling",
            "description": "Take a few minutes today to write down at least 10 things you're grateful for.",
            "example": "Today I am grateful for sunsets."
        },
        "Walk or Exercise":
        {
            "name": "Walk or Exercise",
            "description": "Take a break from your routine to go for a walk or engage in light exercise. It can be refreshing and provide a mental and physical boost.",
            "example": "A 15 minute peaceful walk to clear your mind."
        }
    }

    const checkin = activities["Check-in"];
    const funfacts = activities["Fun Facts"];
    const meditation = activities["Meditation"];
    const letter = activities["Write a Letter"];
    const gratitude = activities["Gratitude Journaling"];
    const walk = activities["Walk or Exercise"];

    const [checkinSelected, setCheckinSelected] = React.useState(false);
    const [funfactsSelected, setFunfactsSelected] = React.useState(false);
    const [meditationSelected, setMeditationSelected] = React.useState(false);
    const [letterSelected, setLetterSelected] = React.useState(false);
    const [gratitudeSelected, setGratitudeSelected] = React.useState(false);
    const [walkSelected, setWalkSelected] = React.useState(false);


    function SelectCheckin() {
        checkinSelected ? setCheckinSelected(false) : setCheckinSelected(true);
        setFunfactsSelected(false);
        setMeditationSelected(false);
        setLetterSelected(false);
        setGratitudeSelected(false);
        setWalkSelected(false);
    }

    function SelectFunfacts() {
        funfactsSelected ? setFunfactsSelected(false) : setFunfactsSelected(true);
        setCheckinSelected(false);
        setMeditationSelected(false);
        setLetterSelected(false);
        setGratitudeSelected(false);
        setWalkSelected(false);
    }

    function SelectMeditation() {
        meditationSelected ? setMeditationSelected(false) : setMeditationSelected(true);
        setCheckinSelected(false);
        setFunfactsSelected(false);
        setLetterSelected(false);
        setGratitudeSelected(false);
        setWalkSelected(false);
    }

    function SelectLetter() {
        letterSelected ? setLetterSelected(false) : setLetterSelected(true);
        setCheckinSelected(false);
        setFunfactsSelected(false);
        setMeditationSelected(false);
        setGratitudeSelected(false);
        setWalkSelected(false);
    }

    function SelectGratitude() {
        gratitudeSelected ? setGratitudeSelected(false) : setGratitudeSelected(true);
        setCheckinSelected(false);
        setFunfactsSelected(false);
        setMeditationSelected(false);
        setLetterSelected(false);
        setWalkSelected(false);
    }

    function SelectWalk() {
        walkSelected ? setWalkSelected(false) : setWalkSelected(true);
        setCheckinSelected(false);
        setFunfactsSelected(false);
        setMeditationSelected(false);
        setLetterSelected(false);
        setGratitudeSelected(false);
    }

    return (
        <div>
            <PageTitle title={'Mental Health Activities'}/>

            <Blurb>This dedicated space is designed with your well-being in mind. Explore engaging activities and games crafted to support and boost your mental health throughout your mission. These activites provide moments of connection, relaxation, stress relief, and self. Your mental well-being matters! Take a moment, explore, and let these activities nurture your emotional resilience.</Blurb> 

            <div className='activity-card'>
                <div className={`activity-title ${checkinSelected ? 'selected' : ''}`} onClick={SelectCheckin}>
                    <h1>{checkin.name}</h1>
                </div>
                <div className={`activity-description bg-lemon-50 ${checkinSelected ? 'display-block' : 'display-none'}`}>
                    <p className='text-sunset-800'>{checkin.description}</p>
                    <p className='activity-example'>"{checkin.example}"</p>
                </div>
            </div>

            <div className='activity-card'>
                <div className={`activity-title ${funfactsSelected ? 'selected' : ''}`} onClick={SelectFunfacts}>
                    <h1>{funfacts.name}</h1>
                </div>
                <div className={`activity-description bg-lemon-50 ${funfactsSelected ? 'display-block' : 'display-none'}`}>
                    <p className='text-sunset-800'>{funfacts.description}</p>
                    <p className='activity-example'>"{funfacts.example}"</p>
                </div>
            </div>

            <div className='activity-card'>
                <div className={`activity-title ${meditationSelected ? 'selected' : ''}`} onClick={SelectMeditation}>
                    <h1>{meditation.name}</h1>
                </div>
                <div className={`activity-description bg-lemon-50 ${meditationSelected ? 'display-block' : 'display-none'}`}>
                    <p className='text-sunset-800'>{meditation.description}</p>
                    <p className='activity-example'>"{meditation.example}"</p>
                </div>
            </div>

            <div className='activity-card'>
                <div className={`activity-title ${letterSelected ? 'selected' : ''}`} onClick={SelectLetter}>
                    <h1>{letter.name}</h1>
                </div>
                <div className={`activity-description bg-lemon-50 ${letterSelected ? 'display-block' : 'display-none'}`}>
                    <p className='text-sunset-800'>{letter.description}</p>
                    <p className='activity-example'>"{letter.example}"</p>
                </div>
            </div>

            <div className='activity-card'>
                <div className={`activity-title ${gratitudeSelected ? 'selected' : ''}`} onClick={SelectGratitude}>
                    <h1>{gratitude.name}</h1>
                </div>
                <div className={`activity-description bg-lemon-50 ${gratitudeSelected ? 'display-block' : 'display-none'}`}>
                    <p className='text-sunset-800'>{gratitude.description}</p>
                    <p className='activity-example'>"{gratitude.example}"</p>
                </div>
            </div>

            <div className='activity-card'>
                <div className={`activity-title ${walkSelected ? 'selected' : ''}`} onClick={SelectWalk}>
                    <h1>{walk.name}</h1>
                </div>
                <div className={`activity-description bg-lemon-50 ${walkSelected ? 'display-block' : 'display-none'}`}>
                    <p className='text-sunset-800'>{walk.description}</p>
                    <p className='activity-example'>"{walk.example}"</p>
                </div>
            </div>

            <br/><br/><div className='text-sunset text-center'>* More games and activities coming soon * </div>

        </div>
  );
}

export default Activities;