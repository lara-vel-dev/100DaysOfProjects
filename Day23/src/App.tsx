import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [options, setOptions] = useState([{ id: 1, text: "1", colorIndex: 0 }]);

  const colors = ["#FF94F4", "#C094FF", "#94C8FF", "#2EFFDF"];

  function addOptions() {
    const nextColorIndex = options.length % colors.length;
    const number = options.length + 1;
    setOptions([...options, { id: number, text: number.toString(), colorIndex: nextColorIndex}]);
  }

  function removeOption() {
    setOptions(options.slice(0, -1));
  }

  return (
    <>
      <ul className="circle">
        {options.map((item) => (
          <li key={item.id} style={{ backgroundColor: colors[item.colorIndex] }}>
            <div className="text" contentEditable>
              {item.text}
            </div>
          </li>
        ))}
      </ul>
      <button onClick={addOptions}>Add Option</button>
      <button onClick={removeOption}>Remove Option</button>
    </>
  );
}

export default App;
