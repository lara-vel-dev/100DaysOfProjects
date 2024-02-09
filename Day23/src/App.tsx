import React, { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState(true);
  const [degree, setDegree] = useState(0);
  const [time, setTime] = useState(0);

  const options = [
    {
      id: 1,
      text: "Picnin",
      color: "#FF99F0",
      angle: 0,
    },
    {
      id: 2,
      text: "Cineteca",
      color: "#D899FF",
      angle: 30,
    },
    {
      id: 3,
      text: "Cena en terraza",
      color: "#B399FF",
      angle: 60,
    },
    {
      id: 4,
      text: "Noche de juegos",
      color: "#99C9FF",
      angle: 90,
    },
    {
      id: 5,
      text: "Clase de baile",
      color: "#FF99F0",
      angle: 120,
    },
    {
      id: 6,
      text: "Pintar",
      color: "#D899FF",
      angle: 150,
    },
    {
      id: 7,
      text: "Spa",
      color: "#B399FF",
      angle: 180,
    },
    {
      id: 8,
      text: "Boliche",
      color: "#99C9FF",
      angle: 210,
    },
    {
      id: 9,
      text: "Go karts",
      color: "#FF99F0",
      angle: 240,
    },
    {
      id: 10,
      text: "Museo",
      color: "#D899FF",
      angle: 270,
    },
    {
      id: 11,
      text: "Mirador",
      color: "#B399FF",
      angle: 300,
    },
    {
      id: 12,
      text: "Netflix and chill",
      color: "#99C9FF",
      angle: 330,
    },
  ];

  const maxSpins = 10;
  const minSpins = 1;

  const maxDegrees = 360;
  const minDegrees = 1;

  const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const spinWheel = () => {
    setActive(!active);
    const spins = getRandomNumber(minSpins, maxSpins);
    const degrees = getRandomNumber(minDegrees, maxDegrees);
    const fullSpins = (spins - 1) * 360;
    const spin = fullSpins + degrees;
    const animationTime = spins;
    setDegree(spin);
    setTime(animationTime);
  };

  const stopWheel = () => {
    setDegree(0);
    setTime(0);
    setActive(!active); 
  };

  return (
    <main>
      <h1>Romantic Dates Roulette!</h1>
      <section className="roulette-container">
        <div id="selector"></div>
        <div
          id="roulette"
          style={{
            transform: `rotate(${degree}deg)`,
            transitionDuration: `${time}s`,
          }}
        >
          {options.map((item) => (
            <div
              key={item.id}
              className="roulette-section"
              style={{
                backgroundColor: item.color,
                transform: `rotate(${item.angle}deg) skewY(-60deg)`,
              }}
            >
              <div className="roulette-section-container">
                <p contentEditable>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button
            onClick={spinWheel}
            type="button"
            className="btn"
            style={active ? { display: "none" } : {}}
          >
            Spin!
          </button>
          <button
            onClick={stopWheel}
            type="button"
            className="btn"
            style={!active ? { display: "none" } : {}}
          >
            Reset!
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
