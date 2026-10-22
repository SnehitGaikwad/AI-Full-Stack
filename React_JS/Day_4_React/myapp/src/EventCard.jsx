import eventImage from "./assets/event.jpg";
import React, { useState, useEffect } from "react";

function EventCard() {
  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toLocaleString()
  );

  // Update current date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#b0e0e6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "525px",
          backgroundColor: "#f0eff1",
          padding: "30px",
          borderRadius: "32px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Event Image */}
        <img src={eventImage}
          alt="Technology Event"
          style={{
            width: "100%",
            height: "290px",
            objectFit: "cover",
            borderRadius: "28px",
          }}
          
        />

        {/* Event Name */}
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            margin: "35px 0 25px",
            color: "#111111",
          }}
        >
          Tech Summit 2026
        </h1>

        {/* Event Title */}
        <p
          style={{
            fontSize: "23px",
            color: "#808080",
            marginBottom: "25px",
          }}
        >
          Innovation In Modern Web Development
        </p>

        {/* Event Date and Time */}
        <div
          style={{
            backgroundColor: "#dedbdd",
            border: "2px solid #b8b6b8",
            borderRadius: "30px",
            padding: "22px 10px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#111111",
            marginBottom: "30px",
          }}
        >
          <div>Event Date and Time</div>
          <div>13 October 2026, 12:00 PM</div>
        </div>

        {/* Current Live Date and Time */}
        <p
          style={{
            fontSize: "17px",
            color: "#54856b",
            margin: "0 0 25px",
          }}
        >
          Live Now: {currentDateTime}
        </p>
      </div>
    </div>
  );
}

export default EventCard;
