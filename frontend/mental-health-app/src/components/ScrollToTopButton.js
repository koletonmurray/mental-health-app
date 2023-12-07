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

export default ScrollToTopButton;