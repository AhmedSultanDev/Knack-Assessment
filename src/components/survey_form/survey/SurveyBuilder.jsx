import React, { useState } from "react";
import SurveyTitle from "./SurveyTitle";
import SurveyQuestion from "./SurveyQuestion";
import { useInputValue } from "../hooks";
import Question from "../controllers/Question";
import ListController from "../controllers/ListController";


export default function SurveyBuilder() {
  const [title, handleChangeTitle] = useInputValue("Survey Title");
  const [questions, setQuestions] = useState([
    new Question({
      text: "Edit this Question",
      options: ["A", "B", "C", "D"]
    })
  ]);

  const listController = new ListController(questions, setQuestions);

  return (
    <div className="small-container">
      <SurveyTitle title={title} handleChangeTitle={handleChangeTitle} />

      <ol>
        {questions.map((question, i) => (
          <SurveyQuestion
            key={question.id}
            question={question}
            setQuestion={question => listController.set(i, question)}
            removeQuestion={() => listController.remove(i)}
            moveQuestionUp={() => listController.moveUp(i)}
            moveQuestionDown={() => listController.moveDown(i)}
          />
        ))}
      </ol>
      <button onClick={() => listController.add(new Question())}>
        <i className="fas fa-plus icon" />
        Add Question
      </button>
    </div>
  );
}
