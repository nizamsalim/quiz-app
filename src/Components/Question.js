function Question({ question, selectedOptions, setSelection }) {
  //   const [selectedOption, setSelectedOption] = useState(null);
  console.log(question);
  return (
    <div className="container">
      <h5>Q.{question.questionNumber} / 10</h5>
      <h2>{question.questionText}</h2>
      <div className="d-flex flex-column">
        {Object.entries(question.answerOptions).map(([akey, value]) => {
          return (
            <QuestionOption
              akey={akey}
              value={value}
              question={question}
              selectedOptions={selectedOptions}
              setSelection={setSelection}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Question;
// question from above and akey

function QuestionOption({
  akey,
  value,
  question,
  setSelection,
  selectedOptions,
}) {
  return (
    <button
      className={`btn btn-${
        selectedOptions[question.questionNumber] === akey
          ? "secondary"
          : "light"
      } mb-4`}
      style={{
        textAlign: "left",
        fontSize: "20px",
      }}
      onClick={(e) => {
        if (selectedOptions[question.questionNumber] === akey) {
          return setSelection(question.questionNumber, null);
        }
        setSelection(question.questionNumber, akey);
      }}
    >
      {" "}
      {value}{" "}
    </button>
  );
}
