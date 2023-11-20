import React from 'react';
import ChatButton from '../components/ChatButton';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="bg-gray-100 flex flex-col">
      <Header />
      <div className="min-h-[650px] flex flex-col relative">
        <div className="flex-grow p-4">
          <div className="bg-white rounded-lg p-4 shadow-md">{children}</div>
        </div>
        {/* Add the ChatButton component at the bottom right corner */}
        <ChatButton />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
