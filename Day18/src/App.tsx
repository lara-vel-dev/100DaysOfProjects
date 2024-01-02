import { useState } from "react";
import Quiz from "./pages/Quiz";

const App = () => {
  const [start, setStart] = useState(false);

  return (
    <div>
      <div className="main" style={start ? { display: "none" } : {}}>
        <h1>Test para saber qué tipo de mango eres</h1>
        <img
          src="https://i0.wp.com/estoessinaloa.com/wp-content/uploads/2020/07/mangoprincipal.jpg?fit=1140%2C650&ssl=1"
          alt="Mangos"
        />
        <button onClick={() => setStart(true)}>Iniciar</button>
      </div>
      <div className="quiz" style={!start ? {display: "none"} : {}}>
        <Quiz />
      </div>
    </div>
  );
};

export default App;
