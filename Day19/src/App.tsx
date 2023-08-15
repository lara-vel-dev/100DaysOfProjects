import "./App.css";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const [position, setPosition] = useState({ x: 810, y: 415 });

  const handleHover = () => {
    const maxX = window.innerWidth - 100; // Ancho máximo de la ventana - ancho del botón
    const maxY = window.innerHeight - 40; // Alto máximo de la ventana - alto del botón

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setPosition({ x: randomX, y: randomY });
  };

  const handleMouseLeave = () => {};

  return (
    <>
      <div className="text" style={clicked ? { display: "none" } : {}}>
        <h1>Hola, me gustas mucho</h1>
        <h2>¿Quieres ser mi chikistrikis?</h2>
      </div>
      <div className="buttons" style={clicked ? { display: "none" } : {}}>
        <button className="btn yes" onClick={() => setClicked(true)}>
          Por su puesto bb ❤️
        </button>
        <button
          className="btn no"
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Ay no, eso si jamás ❌
        </button>
      </div>

      <div className="img" style={clicked ? {} : { display: "none" }}>
        <img
          src="https://imgs.search.brave.com/4O2A0UcpW1pKmSwLQBiG_294aFYPSB4R9eh5UpCdgYI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk4Lzkz/L2FiLzk4OTNhYmY5/NmRmYTI0ZTE4NTdk/NzJiZDcyZWIxOTJi/LmpwZw"
          alt="crush image"
        />
      </div>
    </>
  );
}

export default App;
