import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MentalHealthCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [colors, setColors] = useState({});

  const colorOptions = ["#FFB6C1", "#87CEEB", "#98FB98", "#FFFFE0", "#FFDAB9"]; // Example colors

  const onDayClick = (value) => {
    const formattedDate = value.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
  };

  const handleColorChange = (color) => {
    if (selectedDate) {
      setColors({ ...colors, [selectedDate]: color });
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = date.toISOString().split("T")[0];
      const colorForDate = colors[formattedDate];
      if (colorForDate) {
        return (
          <div style={{ height: "100%", backgroundColor: colorForDate }} />
        );
      }
    }
    return null;
  };

  return (
    <div>
      {colorOptions.map((color, index) => (
        <label key={index}>
          <input
            type="radio"
            name="color"
            value={color}
            onChange={() => handleColorChange(color)}
            disabled={!selectedDate}
          />
          <span
            style={{
              backgroundColor: color,
              width: "20px",
              height: "20px",
              display: "inline-block",
            }}
          ></span>
        </label>
      ))}
      <Calendar
        onChange={setDate}
        value={date}
        onClickDay={onDayClick}
        tileContent={tileContent}
      />
    </div>
  );
};

export default MentalHealthCalendar;
