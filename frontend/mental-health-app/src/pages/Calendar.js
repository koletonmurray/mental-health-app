import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PageTitle from "../components/PageTitle";

const MentalHealthCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [colors, setColors] = useState({});

  const colorOptions = [
    "#FFB6C1",
    "#87CEEB",
    "#98FB98",
    "#FFFFE0",
    "#FFDAB9",
    "#FFFFFF",
  ]; // Example colors
  const colorNames = ["Mad", "Sad", "Happy", "Neutral", "Okay", "Clear"];

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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <PageTitle title={'Daily mood tracker!'} pbottom={5}/>
      <PageTitle subtitle={'Pick the day and how you felt that day'} ptop={0}/>
      <br/>
      <div
        className="color-options-container"
        style={{ justifyContent: "center" }}
      >
        {colorOptions.map((color, index) => (
          <label key={index} className="color-option flex-item text-center justify-center">
            <input
              type="button"
              name="color"
              value={colorNames[index]}
              onClick={() => handleColorChange(color)}
              disabled={!selectedDate}
              className="color-radio-input"
              style={{ backgroundColor: color }}
            />
          </label>
        ))}
      </div>
      <br />
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
