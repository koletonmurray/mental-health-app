import React from "react";
//import { Link } from "react-router-dom";
import { BsChatSquareDots } from "react-icons/bs"; // You may need to install react-icons

const ChatButton = () => {
  return (
    <a
      href="https://chat.openai.com/g/g-VK1aaCfZI-missionary-companion"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="fixed bottom-4 right-4 bg-lightgreen p-3 rounded-full text-white cursor-pointer"
        title="Chat with an AI"
      >
        <BsChatSquareDots size={32} />
      </div>
    </a>
  );
};

export default ChatButton;
