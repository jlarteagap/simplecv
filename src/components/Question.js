import React, { useContext } from 'react'
import AppContext from '../hoc/AppContext'
import PropTypes from 'prop-types'

function Question({ question }) {
  const value = useContext(AppContext)
  const { questionAnswer } = value.state
  const { handleChangeInput, nextQuestion } = value.function
  return (
    <div className="container is-flex is-justify-content-center is-align-content-center">
      <div className="box">
        <form noValidate autoComplete="on" onSubmit={nextQuestion}>
          <div className="control">
            <label>{questionAnswer.question}</label>
            <input
              className="input"
              type="text"
              label={questionAnswer.question}
              name={questionAnswer.resumeFieldId}
              value={questionAnswer.answer ? questionAnswer.answer : ''}
              onChange={handleChangeInput}
              placeholder={questionAnswer.question}
            />
          </div>
          <div className="field">
            <p className="control">
              <button type="submit" className="button is-success">
                Siguiente
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
Question.propTypes = {
  question: PropTypes.array
}
export default Question
