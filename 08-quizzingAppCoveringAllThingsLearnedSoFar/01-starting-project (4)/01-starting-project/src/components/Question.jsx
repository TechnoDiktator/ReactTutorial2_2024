import QuestionTimer from "./QuestionTimer"

import Answers from "./Answers"
import { useState } from "react"
import QUESTION from '../questions'

export default function Question({
    Qindex,
    onSelectAnswer , 
    onSkipAnswer    
    }){


    const [answer , setAnswer] = useState({
        selectedAnswer:'',
        isCorrect:null
    })

    function handleSelectAnswe(answer){
        setAnswer({
            selectedAnswer:answer,
            isCorrect:null
        })
    }

    setTimeout(()=>{
        setAnswer({
            selectedAnswer:answer,
            isCorrect:QUESTION[Qindex].answers[0]===answer
        })

        setTimeout(() => {
            onSelectAnswer(answer)
        } , 1500)

    } , 1000)

    let answerState = ''

    if(answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? "correct" : 'wrong'
    }else if(answer.selectedAnswer) {
        answerState = "answered"

    }

    return (
        <div id="question">
            {/* If the timer runs out it means that no answer was chosen for the current active queestion */}
            {/*the key prop is provided by react so that 
            if thee key changes the underlying componenet can be rerendered */}
            <QuestionTimer
            timeout={10000} 
            onTimeout={onSkipAnswer } />
            <h2>
                {QUESTION[Qindex].text}
            </h2>
            <Answers 
                answers={QUESTION[Qindex].answers}
                selectedAnswer = {answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswe}
            />
        </div>
    )
}