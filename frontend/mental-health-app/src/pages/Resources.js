import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import Blurb from '../components/Blurb';

import { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track when to show/hide the button
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 300); // Adjust the value based on when you want the button to appear
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling for a nicer effect
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-10 bg-sunset text-white px-5 py-3 rounded-full text-2xl ${isVisible ? 'visible' : 'invisible'}`}
      onClick={scrollToTop}
      style={{ right: '80px' }}
    >
      &#x2191;
    </button>
  );
}


function Resources() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

    return (
        <div className=''>
            <ScrollToTopButton/>
            <PageTitle title={'Mental Health Resources'}/>

            {/* Nav Bar at top to navigate on page */}
            <nav className="flex justify-center mb-4">
                <ul className="flex space-x-5">
                    <li>
                        <button className="nav-button" onClick={() => scrollToSection('managing-stress')}>
                        Managing Stress
                        </button>
                    </li>
                    <li>
                        <button className="nav-button" onClick={() => scrollToSection('exercising')}>
                        Exercising
                        </button>
                    </li>
                    <li>
                        <button className="nav-button" onClick={() => scrollToSection('companion-conflict')}>
                        Companion Conflict
                        </button>
                    </li>
                    <li>
                        <button className="nav-button" onClick={() => scrollToSection('eating-right')}>
                        Eating Right
                        </button>
                    </li>
                    <li>
                        <button className="nav-button" onClick={() => scrollToSection('meditation')}>
                        Meditation
                        </button>
                    </li>
                    <li>
                        <button className="nav-button" onClick={() => scrollToSection('laughter')}>
                        Laughter
                        </button>
                    </li>
                    <li>
                        <button className="nav-button" onClick={() => scrollToSection('calming-music')}>
                        Calming Music
                        </button>
                    </li>
                </ul>
            </nav>
            <br/><br/>

            {/* Favorites */}
            <PageTitle title={'Favorites'}/>
            <div className="flex justify-center items-center gap-4 mb-4">
                <Card link={'https://www.churchofjesuschrist.org/get-help/mental-health?lang=eng'} bgcolor={'peach'}>
                    Church of Jesus Christ Mental Health Resources
                </Card>

                <Card link={'https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life?lang=eng'} bgcolor={'lightgreen'}>
                    Adjusting to Missionary Life
                </Card>

                <Card link={'https://www.churchofjesuschrist.org/study/ensign/2020/09/young-adults/for-missionaries-struggling-with-mental-health?lang=eng'} bgcolor={'lemon'}>
                    For Struggling Missionaries
                </Card>
            </div>

            {/* Managing Stress */}
            <div className="mb-4" id="managing-stress">
                <PageTitle subtitle={'Managing Stress'} />
                <Blurb>Effectively managing stress is a pivotal cornerstone for preserving mental well-being in the fast-paced tapestry of life. Embracing stress as a natural part of the human experience, rather than an adversary, opens avenues for coping and resilience. Incorporating mindful practices, such as meditation, deep breathing, or grounding exercises, creates a sanctuary within, allowing you to navigate life's challenges with a steadier hand. Additionally, cultivating a healthy work-life balance, setting realistic goals, and knowing when to seek support all contribute to a robust stress management toolkit. Remember, managing stress is not about eliminating it entirely but about developing a repertoire of coping mechanisms that empower you to face adversity with grace and resilience. By prioritizing your mental well-being and embracing stress as a teacher, you pave the way for a more balanced and fulfilling life.</Blurb>
                <div className="flex justify-center items-center gap-4">
                    <Card link={'https://www.churchofjesuschrist.org/study/manual/emotional-resilience-for-self-reliance/4-managing-stress-and-anxiety/4-learn?lang=eng'} bgcolor={'lightgreen'}>
                        Managing Stress and Anxiety
                    </Card>
                    <Card link={'https://www.churchofjesuschrist.org/study/liahona/2000/09/five-ways-to-reduce-stress?lang=eng#title1'} bgcolor={'peach'}>
                        Five Ways to Reduce Stress - Article
                    </Card>
                </div>
            </div>

            {/* Exercising */}
            <div className="mb-4" id="exercising">
                <PageTitle subtitle={'Exercising'} />
                <Blurb>Engaging in regular exercise is a powerful investment in your mental well-being, unlocking a multitude of benefits that extend far beyond the physical realm. As you embark on the journey of movement, whether it's a brisk walk, invigorating run, or a session of yoga, you are not only sculpting your body but also sculpting a resilient mind. Exercise acts as a potent stress buster, releasing endorphins that act as natural mood lifters, diminishing anxiety, and promoting a sense of well-being. Moreover, the rhythmic cadence of physical activity provides a meditative space, allowing you to clear mental cobwebs and gain perspective. It's a holistic approach, where the synergy between body and mind creates a harmonious balance. So, lace up those sneakers or roll out the yoga mat, and let each movement be a testament to your commitment to a healthier, happier you.</Blurb>
                <div className="flex justify-center items-center gap-4">
                    <Card link={'https://providentliving.churchofjesuschrist.org/self-reliance/health/exercise-and-fitness?lang=eng'} bgcolor={'lemon'}>
                        Exercise and Fitness - Article
                    </Card>
                    <iframe width="350" height="197" src="https://www.youtube.com/embed/x3aogIZfVUI?si=SGlXimeOx1BioFUy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

            {/* Companion Conflict */}
            <div className="mb-4" id="companion-conflict">
                <PageTitle subtitle={'Companion Conflict'} />
                <Blurb>Navigating and resolving conflicts within personal relationships is a profound step towards nurturing your mental well-being. The ebb and flow of human connections inevitably bring moments of discord, yet addressing these challenges with empathy and effective communication transforms them into opportunities for growth. Choosing understanding over confrontation, active listening over assumption, fosters an environment where conflicts become bridges rather than barriers. Embracing conflict resolution is an empowering act, allowing you to create spaces of emotional safety and cultivate deeper connections. As you navigate the delicate dance of interpersonal dynamics, remember that the goal is not the absence of conflict but the presence of constructive dialogue that fuels mutual understanding and fortifies the bonds that contribute to your mental resilience.</Blurb>
                <div className="flex justify-center items-center gap-4">
                    <Card link={'https://www.churchofjesuschrist.org/inspiration/7-ways-to-resolve-conflict-and-achieve-harmony?lang=eng'} bgcolor={'lemon'}>
                        7 Ways to Resolve Conflict and Achieve Harmony - Article
                    </Card>
                    <Card link={'https://www.churchofjesuschrist.org/inspiration/the-key-to-navigating-conflict?lang=eng'} bgcolor={'lightgreen'}>
                        The Key to Navigating Conflict - Article
                    </Card>
                </div>
            </div>

            {/* Eating Right */}
            <div className="mb-4" id="eating-right">
                <PageTitle subtitle={'Eating Right'} />
                <Blurb>Embracing a lifestyle of healthy eating is a compassionate act towards both your body and mind. Nourishing yourself with wholesome, nutrient-rich foods is like providing the essential fuel needed for optimal mental well-being. The intricate dance between a balanced diet and mental health is undeniable, as certain nutrients play key roles in neurotransmitter production and overall cognitive function. As you make mindful choices in what you consume, you're not just nurturing your physical health; you're also fostering a positive relationship with food that reverberates into your mental and emotional realms. So, consider each meal as an opportunity to care for your holistic well-being, savoring the flavors that contribute to a harmonious union of a nourished body and a resilient mind.</Blurb>
                <div className="flex justify-center items-center gap-4">
                    <Card link={'https://www.churchofjesuschrist.org/life/child-nutrition-resources/healthy-eating?lang=eng'} bgcolor={'lemon'}>
                        Healthy Eating - Article
                    </Card>
                    <Card link={'https://www.churchofjesuschrist.org/study/test/dive/goals-activities/cook-right-eat-right-and-be-healthier?lang=eng'} bgcolor={'lightgreen'}>
                        Cook Right, Eat Right, Be Healthier - Article
                    </Card>
                </div>
            </div>

            {/* Meditation */}
            <div className="mb-4" id="meditation">
                <PageTitle subtitle={'Meditation'} />
                <Blurb>Embarking on the journey of meditation unveils a profound sanctuary for your mental well-being. In the quietude of contemplation, you find a space to untangle the threads of thoughts and reconnect with your inner self. Meditation is a transformative practice, offering a respite from the hustle and bustle of daily life. As you immerse yourself in the gentle rhythm of breath and stillness, a sense of clarity emerges, clearing the mental fog and providing a haven for serenity. It is an invaluable tool for stress reduction and cultivating mindfulness. Embrace the art of meditation, dedicating moments each day to this introspective voyage. Allow the calmness to envelop you, and witness the positive impact it has on your mental landscape. By inviting meditation into your routine, you embark on a journey of self-discovery and well-being—an empowering step towards a more centered and tranquil existence.</Blurb>
                <div className="flex justify-center items-center gap-4">
                    <iframe width="300" height="169" src="https://www.youtube.com/embed/lVx3mFxML80?si=iKE2AcrzhT0ryKhr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="300" height="169" src="https://www.youtube.com/embed/ZToicYcHIOU?si=NLf3vxUfNTxhDbBC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

            {/* Laughter */}
            <div className="mb-4" id="laughter">
                <PageTitle subtitle={'Laughter'} />
                <Blurb>Laughter is like a mental health superhero—it releases feel-good chemicals, instantly boosts joy, and eases stress. Beyond that, it connects us with others, offering a break from life's complexities. Embracing laughter in your daily routine is a straightforward and effective way to navigate challenges, lift your spirits, and find comfort. So, why not make laughter a regular part of your life? It's a simple yet powerful encouragement for positive mental well-being.</Blurb>
                <div className="flex justify-center items-center gap-4">
                    <iframe width="350" height="197" src='//players.brightcove.net/1241706627001/default_default/index.html?videoId=1834376774001' title='The Phone Call' allowfullscreen frameborder></iframe>
                    <iframe width="350" height="197" src="https://www.youtube.com/embed/8F9jXYOH2c0?si=jF51l6EMXfe0PBK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

            {/* Calming Music */}
            <div className="mb-4" id="calming-music">
                <PageTitle subtitle={'Calming Music'} />
                <Blurb>Immersing yourself in the soothing embrace of calming music is a gentle yet powerful strategy for nurturing your mental well-being. As the harmonious melodies envelop your senses, a cascade of tranquility washes over, easing the burdens of the day. Calming music possesses a unique ability to orchestrate emotional harmony, offering respite from the cacophony of daily life. It can be your refuge, providing a serene backdrop that encourages relaxation and fosters a sense of peace. So, consider dedicating moments to the therapeutic embrace of calming tunes when the world feels overwhelming. Let the melodies be your guide, inviting you to a place of calm amidst life's chaos—an invitation to prioritize your mental health and discover the profound impact of music on the soul.</Blurb>
                <div className="flex justify-center items-center gap-4">
                    <iframe width="300" height="169" src="https://www.youtube.com/embed/RmrVwqbYbFU?si=HID625R2c3HL86xq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="300" height="169" src="https://www.youtube.com/embed/fw34q8VJtc0?si=LpWaRlTG8cqmRXti" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div><br/><br/>
        </div>
    );
}

export default Resources;
