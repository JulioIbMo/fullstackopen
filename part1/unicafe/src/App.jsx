import { useState } from 'react'
/////////////////////////////////
const Button = (props) => {
  return(
  <button onClick={props.handleClick} >
    {props.text}
  </button>
  )
}
/////////////////////////////////
const StatisticsLine = (props) => {
  return(
    <tr>
      <td> {props.name} </td>
      <td> {props.value} </td> 
    </tr>
  )
}
/////////////////////////////////////
const Statistics = ({good,neutral,bad}) => {
  const all= good+neutral+bad
  const average = ((good-bad)/all)
  const positive = ( (good*100)/all ) + '%'
  const statisticsExist = good > 0 || neutral>0 || bad > 0

  return(
    <div>
      {statisticsExist ? (
          <table>
            <tbody>
              <StatisticsLine name='good' value={good}  />
              <StatisticsLine name='neutral' value={neutral}  />
              <StatisticsLine name='bad' value={bad}  />
              <StatisticsLine name='all' value={all}  />
              <StatisticsLine name='average' value={average}  />
              <StatisticsLine name='positive' value={positive}  />      
            </tbody>
          </table>
      ) : (
        <p>No feedback given</p>
      ) }
    </div>
  )
}
//////////////////////////////////////////
const App = () => {

//Guardando clics en los ESTADOS para cada uno
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

  return (
      <div>
      <h1> Give Feedback </h1>

      <Button handleClick={() => setGood(good+1)} text='good' />
      <Button handleClick={() => setNeutral(neutral+1)} text='neutral' />
      <Button handleClick={() => setBad(bad+1)} text='bad' />

      <h1> Statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
  )
}

export default App
