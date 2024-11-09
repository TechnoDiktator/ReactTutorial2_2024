import { useState , useRef } from "react"

import QUESTIONS from '../questions'
import QuestionTimer from "./QuestionTimer"
import Question from "./Question"

import quizCompleteImg from '../assets/quiz-complete.png'
import { useCallback } from "react"

export default function Quiz() {
    


    //const [activeQuestionIndex , setActiveQuestionIndex] = useState(0)
    const [userAnswers , setUserAnswers] = useState([])    


    //to track the active wuestion index
    const activeQuestionIndex = userAnswers.length



    const quizIsComplete = activeQuestionIndex === QUESTIONS.length
    
    console.log("Active questions index",activeQuestionIndex)
    console.log(quizIsComplete)
    
    //
    const handleSelectAnswe = useCallback( function handleSelectAnswe(selectedAnswer){
        setUserAnswers((prevUserAnswers)=>{
            return [...prevUserAnswers , selectedAnswer]
        })
    },[])



    const handleSkipAnswer = useCallback(
        ()=>handleSelectAnswe(null)
    , [handleSelectAnswe])

    //all questions exhausted
    if(quizIsComplete){
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="" />
                <h2>QUIZ COMPLETED</h2>
            </div>
        )
    }

    return(
        <div id="quiz">
            <Question  
            key={activeQuestionIndex}
            Qindex={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswe}
            onSkipAnswer={handleSkipAnswer}
            >
            </Question>
        </div>
    )

}