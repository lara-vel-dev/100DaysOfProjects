import { useState, useEffect } from "react";
import { questions, results } from "../../data";
import "./Quiz.css";
import Results from "../Results";

const Quiz = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [finish, setFinish] = useState(false);
  const [selectedA, setSelectedA] = useState(false);
  const [selectedB, setSelectedB] = useState(false);
  const [selectedC, setSelectedC] = useState(false);
  const [selectedD, setSelectedD] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [optionACount, setOptionACount] = useState(0);
  const [optionBCount, setOptionBCount] = useState(0);
  const [optionCCount, setOptionCCount] = useState(0);
  const [optionDCount, setOptionDCount] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelected = (option: string) => {
    switch (option) {
      case "A":
        setOptionACount((prevCount) => prevCount + 1);
        setSelectedA(true);
        setSelectedB(false);
        setSelectedC(false);
        setSelectedD(false);
        break;
      case "B":
        setOptionBCount((prevCount) => prevCount + 1);
        setSelectedB(true);
        setSelectedA(false);
        setSelectedC(false);
        setSelectedD(false);
        break;
      case "C":
        setOptionCCount((prevCount) => prevCount + 1);
        setSelectedC(true);
        setSelectedA(false);
        setSelectedB(false);
        setSelectedD(false);
        break;
      case "D":
        setOptionDCount((prevCount) => prevCount + 1);
        setSelectedD(true);
        setSelectedA(false);
        setSelectedB(false);
        setSelectedC(false);
        break;
      default:
        break;
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedA(false);
    setSelectedB(false);
    setSelectedC(false);
    setSelectedD(false);
  };

  const handleFinish = () => {
    setAllQuestionsAnswered(true);
    setFinish(true);
  };

  const allQuestionsAnsweredCheck = () => {
    const allAnswered =
      (optionACount > 0 ||
        optionBCount > 0 ||
        optionCCount > 0 ||
        optionDCount > 0) &&
      currentQuestionIndex === 4;
    setAllQuestionsAnswered(allAnswered);
  };

  useEffect(() => {
    allQuestionsAnsweredCheck();
    const array = [optionACount, optionBCount, optionCCount, optionDCount];
    const maxCount = Math.max(...array);
    const popularOption = array.indexOf(maxCount);

    if (array[popularOption] == optionACount) {
        setDescription(results[0].description);
        setTitle(results[0].title);
        setImage(results[0].image);
    } else if (array[popularOption] == optionBCount) {
        setDescription(results[1].description);
        setTitle(results[1].title);
        setImage(results[1].image);
    }
     else if (array[popularOption] == optionCCount) {
        setDescription(results[2].description);
        setTitle(results[2].title);
        setImage(results[2].image);
    }
    else {
        setDescription(results[3].description);
        setTitle(results[3].title);
        setImage(results[3].image);
    }



  }, [currentQuestionIndex]);

  return (
    <div className="question-container">
      <div style={finish ? { display: "none" } : {}}>
        <div className="question-card">
          <div className="header">
            <h3>{currentQuestion.question}</h3>
            <p>
              {currentQuestionIndex + 1}/{questions.length}
            </p>
          </div>
          <div className="questions">
            <button
              className={selectedA ? "selected" : "unselected"}
              onClick={() => handleOptionSelected("A")}
              disabled={selectedB || selectedC || selectedD}
            >
              {currentQuestion.A}
            </button>
            <button
              className={selectedB ? "selected" : "unselected"}
              onClick={() => handleOptionSelected("B")}
              disabled={selectedA || selectedC || selectedD}
            >
              {currentQuestion.B}
            </button>
            <button
              className={selectedC ? "selected" : "unselected"}
              onClick={() => handleOptionSelected("C")}
              disabled={selectedA || selectedB || selectedD}
            >
              {currentQuestion.C}
            </button>
            <button
              className={selectedD ? "selected" : "unselected"}
              onClick={() => handleOptionSelected("D")}
              disabled={selectedA || selectedB || selectedC}
            >
              {currentQuestion.D}
            </button>
          </div>
        </div>

        <div className="btns">
          <button
            onClick={handleNext}
            disabled={
              currentQuestionIndex === questions.length - 1 ||
              (!selectedA && !selectedB && !selectedC && !selectedD)
            }
          >
            Siguiente
          </button>
          <button
            onClick={handleFinish}
            disabled={
              !allQuestionsAnswered ||
              (!selectedA && !selectedB && !selectedC && !selectedD)
            }
          >
            Finalizado
          </button>
        </div>
      </div>
      <div className="answer" style={!finish ? { display: "none" } : {}}>
        <Results title={title} img={image} description={description} />
      </div>
    </div>
  );
};

export default Quiz;
