import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.id}
          part={part} />
      ))}
    </>
  )

}

const Part = (props) => {
  return (
    <>
      <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Total = (props) => {
  const getTotal = props.parts.map(part => part.exercises).reduce((a, b) => a + b);
  return (
    <>
      {<p>{`Number of Exercises ${getTotal}`}</p>}
    </>
  )
}

const App = () => {

  const course =
  {
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
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

ReactDOM.render(<App />, document.getElementById('root'))