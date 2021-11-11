/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import AppContext from './hoc/AppContext'
import 'bulma/css/bulma.min.css'
import Questions from './components/Questions'
import questionsArray from './constants/questionsArray'

function App() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [questionAnswer, setQuestionAnswer] = useState({})

  useEffect(() => {
    setQuestions(questionsArray)
    setQuestionAnswer(questionsArray[0])
  }, [])

  const handleChangeInput = e => {
    setQuestionAnswer({
      ...questionAnswer,
      answer: e.target.value
    })
  }

  const nextQuestion = e => {
    e.preventDefault()
    questions.map(question => {
      if (question.resumeFieldId === questionAnswer.resumeFieldId) {
        setAnswers([...answers, { ...question, answer: questionAnswer.answer }])
      }
    })

    questions.map((qa, index) => {
      if (index <= questions.length) {
        if (qa.resumeFieldId === questionAnswer.resumeFieldId) {
          setQuestionAnswer(questions[index + 1])
        }
      }
    })
  }

  return (
    <AppContext.Provider
      value={{
        state: {
          questionAnswer,
          questions,
          answers
        },
        function: {
          handleChangeInput: handleChangeInput,
          nextQuestion: nextQuestion
        }
      }}
    >
      <div className="app container">
        <h3 className="title has-text-centered">Resume Builder</h3>
        <Questions />
      </div>
    </AppContext.Provider>
  )
}

export default App
