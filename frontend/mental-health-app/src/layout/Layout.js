import React from 'react';
import ChatButton from '../components/ChatButton';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow p-4 relative">
        <div className="bg-white rounded-lg p-4 shadow-md" style={{ contain: 'content', overflow: 'wrap' }}>
          {children}
        </div>
      </div>
      <Footer />
      <ChatButton />
    </div>
  );
}

export default Layout;
