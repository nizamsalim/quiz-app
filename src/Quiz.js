import React, { useState } from "react";
import { questionsData } from "./questions";
import Question from "./Components/Question";
import { Link, useParams } from "react-router-dom";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelection, setSelectedOptions] =
    useSelectedQuestion();
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const { quizTopic } = useParams();

  const questions = questionsData[quizTopic];

  console.log(quizTopic);

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    if (currentQuestionIndex !== 9) {
      return setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    let opts = Object.values(selectedOptions);
    for (let i = 0; i < opts.length; i++) {
      if (opts[i] === null) {
        flag = false;
        alert("Please answer all the questions");
        break;
      }
    }
    if (!flag) {
      return;
    }

    let keys = Object.keys(selectedOptions);
    let correctAnswersCount = 0;
    // console.log(Number(selectedOptions[1]));
    // console.log(questions[0].correctAnswer);
    for (let i = 0; i < keys.length; i++) {
      if (Number(selectedOptions[i + 1]) === questions[i].correctAnswer) {
        correctAnswersCount++;
      }
      console.log({
        selected: Number(selectedOptions[i + 1]),
        answer: questions[i].correctAnswer,
        res: Number(selectedOptions[i + 1]) === questions[i].correctAnswer,
        i,
      });
    }

    setScore(correctAnswersCount);
    setIsCompleted(true);
  };

  const handleRetake = (e) => {
    e.preventDefault();
    setCurrentQuestionIndex(0);
    setSelectedOptions({
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
    });
    setIsCompleted(false);
  };

  return (
    <div className="container" style={{ marginTop: "120px" }}>
      {!isCompleted ? (
        <div>
          {" "}
          <Question
            question={questions[currentQuestionIndex]}
            setSelection={setSelection}
            selectedOptions={selectedOptions}
          />
          <div className="d-flex justify-content-between">
            <button
              className="btn-secondary btn"
              onClick={(e) =>
                currentQuestionIndex !== 0 &&
                setCurrentQuestionIndex(currentQuestionIndex - 1)
              }
            >
              Previous
            </button>
            <div>
              {questions.map((q, i) => {
                return (
                  <button
                    className={`btn btn-${
                      selectedOptions[q.questionNumber] !== null
                        ? "success"
                        : "light"
                    } ms-1 me-1 ${
                      q.questionNumber - 1 === currentQuestionIndex &&
                      "border-info"
                    }`}
                    onClick={(e) =>
                      setCurrentQuestionIndex(q.questionNumber - 1)
                    }
                  >
                    {q.questionNumber}
                  </button>
                );
              })}
            </div>
            <button className="btn-secondary btn" onClick={handleSubmit}>
              {currentQuestionIndex === 9 ? "Submit" : "Next"}
            </button>
          </div>{" "}
        </div>
      ) : (
        <div
          className="container d-flex align-items-center flex-column"
          style={{ marginTop: "120px" }}
        >
          <h2> You have scored {score}/10 !!</h2>
          <button className="btn btn-primary mt-3 w-25" onClick={handleRetake}>
            Retake test
          </button>
          <Link to="/" className="btn btn-primary mt-3 w-25">
            Go to home
          </Link>
        </div>
      )}
    </div>
  );
}

export function useSelectedQuestion() {
  const [selectedOptions, setSelectedOptions] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
  });

  const setSelection = (qnNumber, optionNumber) => {
    setSelectedOptions({ ...selectedOptions, [qnNumber]: optionNumber });
  };

  return [selectedOptions, setSelection, setSelectedOptions];
}

export default Quiz;
