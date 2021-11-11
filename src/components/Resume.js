import React, { createRef, useContext } from 'react'
import AppContext from '../hoc/AppContext'

const refreshPage = () => {
  window.location.reload()
}
function Resume() {
  const ref = createRef()
  const value = useContext(AppContext)

  const { answers } = value.state

  return (
    <div>
      <div ref={ref} className="box">
        {answers.map(answer => {
          return (
            <div key={answer.resumeFieldId}>
              {answer.resumeFieldId === 'name' ||
              answer.resumeFieldId === 'email' ||
              answer.resumeFieldId === 'address' ||
              answer.resumeFieldId === 'phoneNumber' ? (
                <div style={{ textAlign: 'right' }}>
                  <label>{answer.answer}</label>
                </div>
              ) : (
                <div>
                  <h4>{answer.resumeFieldId}</h4>
                  <p>{answer.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={refreshPage}>Build New</button>

        {/* Buscar PDF creator  */}
        <div targetRef={ref} filename="code-example.pdf">
          <button>Descargar Resume</button>
        </div>
      </div>
    </div>
  )
}

export default Resume
