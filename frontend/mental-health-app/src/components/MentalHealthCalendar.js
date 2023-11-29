import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MentalHealthCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [moods, setMoods] = useState({});

  useEffect(() => {
    const savedMoods = localStorage.getItem("moods");
    if (savedMoods) {
      setMoods(JSON.parse(savedMoods));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moods));
  }, [moods]);

  const onDayClick = (value) => {
    const formattedDate = value.toISOString().split("T")[0];
    const mood = prompt(
      "How are you feeling today? (e.g., happy, sad, anxious)"
    );
    setMoods({ ...moods, [formattedDate]: mood });
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = date.toISOString().split("T")[0];
      const mood = moods[formattedDate];
      if (mood) {
        return `mood-${mood}`;
      }
    }
  };

  return (
    <div>
      <Calendar
        onChange={setDate}
        onClickDay={onDayClick}
        value={date}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default MentalHealthCalendar;
