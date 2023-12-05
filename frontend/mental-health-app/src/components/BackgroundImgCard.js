import React from "react";

function BackgroundImgCard({ children, img, className, style }) {
  const cardStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    ...style,
  };

  return (
    <div className={className} style={cardStyle}>
      {children}
    </div>
  );
}

export default BackgroundImgCard;
