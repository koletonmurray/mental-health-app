import React from "react";
import PageTitle from "../components/PageTitle";
import BackgroundImgCard from "../components/BackgroundImgCard";
import chatbotImage from "../img/chatbotImage.png";
import missionPresidentImage from "../img/missionPresident.png";
import companionImage from "../img/companion.png";
import familyFriendsImage from "../img/familyFriends.png";

function ChatBot() {
  const cardStyle = {
    border: "2px solid #1B524E", // feel free to change these colors, I just grabbed one from Koleton's hexcodes
  };

  const textStyle = {
    backgroundColor: "#1B524E", // same color
    opacity: 0.75,
    padding: "1rem",
    color: "white",
  };

  return (
    <>
      <div className="flex justify-center">
        <PageTitle title={"Get Help"} />
      </div>

      <div className="text-center mb-10 mx-auto max-w-4xl px-4">
        <p>
          It's always okay to seek help. Missions are not easy and we strongly
          encourage reaching out to others during challenging times. Here are
          some sources of support that are always available to you.
        </p>
        <p>Remember, you're not alone in this journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 mx-4 md:mx-48">
        <BackgroundImgCard
          img={chatbotImage}
          className="h-64 md:h-96"
          style={cardStyle}
        >
          <a
            href="https://chat.openai.com/g/g-VK1aaCfZI-missionary-companion"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", height: "100%" }}
          >
            <div style={textStyle}>
              <h3 className="text-lg font-bold">Interactive Chatbot</h3>
              <p className="text-sm">
                Use a trained chatbot specifically for comforting missionaries.
                Use it to get help with scriptures, habits, homesickness, or
                anything about missonary life.
              </p>
              <p className="text-sm">
                Click this image or the chat button below.
              </p>
            </div>
          </a>
        </BackgroundImgCard>

        <BackgroundImgCard
          img={missionPresidentImage}
          className="h-64 md:h-96"
          style={cardStyle}
        >
          <div style={textStyle}>
            <h3 className="text-lg font-bold">
              Reach Out to Your Mission President
            </h3>
            <p className="text-sm">
              Your mission president loves you and can help support you in
              anything. Let him know how you are feeling. He is ready to help
              you and support you through anything.
            </p>
          </div>
        </BackgroundImgCard>

        <BackgroundImgCard
          img={companionImage}
          className="h-64 md:h-96"
          style={cardStyle}
        >
          <div style={textStyle}>
            <h3 className="text-lg font-bold">
              Communicate with Your Companion
            </h3>
            <p className="text-sm">
              Jesus Christ said, "And ye shall go forth in the power of my
              Spirit, preaching my gospel, two by two, in my name"(D&C 42:6).
              You are with your companion for a reason. Be open and honest with
              each other, you are not alone in your trials.
            </p>
          </div>
        </BackgroundImgCard>

        <BackgroundImgCard
          img={familyFriendsImage}
          className="h-64 md:h-96"
          style={cardStyle}
        >
          <div style={textStyle}>
            <h3 className="text-lg font-bold">Connect with Family</h3>
            <p className="text-sm">
              Family can be a great source of love and support. Let them know
              how you are feeling. They can offer advice for whatever you are
              feeling and can remind you of why you chose to serve a mission.
            </p>
          </div>
        </BackgroundImgCard>
      </div>
    </>
  );
}

export default ChatBot;
