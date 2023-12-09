import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

const ChatButton = () => {
  return (
    <a
      href="https://chat.openai.com/g/g-VK1aaCfZI-missionary-companion"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="fixed bottom-4 right-4 bg-lightgreen p-3 rounded-full text-white cursor-pointer z-50"
        title="Chat with an AI"
      >
        <BsChatSquareDots size={32} />
      </div>
    </a>
  );
};

export default ChatButton;
