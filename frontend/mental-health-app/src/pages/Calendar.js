import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MentalHealthCalendar.css"; // Import your custom CSS

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

  const onDayClick = (value, event) => {
    const formattedDate = value.toISOString().split("T")[0];
    const mood = prompt(
      "How are you feeling today? (e.g., happy, sad, anxious)"
    );
    setMoods({ ...moods, [formattedDate]: mood });
  };

  const dayClassName = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return moods[formattedDate] || "";
  };

  return (
    <div>
      <Calendar
        onChange={setDate}
        onClickDay={onDayClick}
        value={date}
        tileClassName={({ date, view }) =>
          view === "month" && dayClassName(date)
        }
      />
    </div>
  );
};

export default MentalHealthCalendar;
