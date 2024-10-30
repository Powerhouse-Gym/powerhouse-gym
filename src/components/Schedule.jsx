import React from "react";
import logo from "../assets/crossfit-white-remove-background.com.png"


function Schedule() {
  const weekdayClasses = [
    { time: "5:00 AM", type: "CrossFit Class" },
    { time: "8:30 AM", type: "CrossFit Class" },
    { time: "4:00 PM", type: "Kids CrossFit Class" },
    { time: "5:00 PM", type: "CrossFit Class" },
    { time: "6:00 PM", type: "CrossFit Class" },
  ];

  const weekendClasses = [
    { day: "Saturday", type: "Open Gym & Barbell Club" },
    { day: "Sunday", type: "Open Gym & Barbell Club" },
  ];

  return (
    <>
      <h2 className="schedule-title">CrossFit Class Schedule</h2>
    <div className="schedule-container">
    <div className = "schedule-logo-div">
      <img src= {logo} alt="logo" />
    </div>
    <div>

      <div className="schedule-section">
        <h3 className="schedule-subtitle">Monday - Friday</h3>
        <ul className="schedule-list horizontal-list">
          {weekdayClasses.map((classItem, index) => (
            <li key={index} className="schedule-list-item">
              <span className="schedule-time">{classItem.time}</span> - {classItem.type}
            </li>
          ))}
        </ul>
      </div>

      <div className="schedule-section">
        <h3 className="schedule-subtitle">Saturday & Sunday</h3>
        <ul className="schedule-list horizontal-list">
          {weekendClasses.map((classItem, index) => (
            <li key={index} className="schedule-list-item">
              <span className="schedule-time">{classItem.day}</span> - {classItem.type}
            </li>
          ))}
        </ul>
          </div>
      </div>
    </div>
          </>
  );
}

export default Schedule;
