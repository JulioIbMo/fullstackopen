import Header from './Components/Header/Header.jsx'
import Content from './Components/Content/Content.jsx'
import Total from './Components/Total/Total.jsx'

const App = () => {
  const course = { 
    name: 'Half Stack Application Develpment',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 2
    },
    {
      name: 'State of component',
      exercises: 14
    }
    ]
}

  
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
