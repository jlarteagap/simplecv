/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react'
import Question from './Question'
import AppContext from '../hoc/AppContext'
import Resume from './Resume'

function LinearProgressWithLabel(props) {
  return (
    <progress
      className="progress is-success is-small"
      value={props.value}
      max="100"
    ></progress>
  )
}

function Questions() {
  const [progress, setProgress] = React.useState(0)
  const value = useContext(AppContext)
  const { questionAnswer, questions, answers } = value.state
  console.log(questionAnswer)

  useEffect(() => {
    setProgress(
      (answers.length / questions.length) * 100
        ? (answers.length / questions.length) * 100
        : 0
    )
  }, [answers])

  return (
    <div>
      {questions.length !== answers.length ? (
        <LinearProgressWithLabel value={progress} />
      ) : null}
      <div>
        {questions.length === answers.length ? (
          <Resume />
        ) : (
          <div>
            <Question questions={questions} />
          </div>
        )}
      </div>
    </div>
  )
}
export default Questions
