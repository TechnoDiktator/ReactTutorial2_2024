import { useState , useRef } from "react"

import QUESTIONS from '../questions'
import QuestionTimer from "./QuestionTimer"
import Question from "./Question"

import quizCompleteImg from '../assets/quiz-complete.png'
import { useCallback } from "react"

export default function Quiz() {
    


    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  
    const handleSelectAnswer = useCallback(function handleSelectAnswer(
      selectedAnswer
    ) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
    },
    []);
  
    const handleSkipAnswer = useCallback(
      () => handleSelectAnswer(null),
      [handleSelectAnswer]
    );
  
    if (quizIsComplete) {
      return <Summary userAnswers={userAnswers} />
    }
  
    return (
      <div id="quiz">
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    );
}
