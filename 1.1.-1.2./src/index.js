import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      {props.coursesDetails.map((courseDetail) => (
        <Part key={courseDetail.id}
          courseDetail={courseDetail} />
      ))}
    </>
  )

}

const Part = (props) => {
  const courseDetail = props.courseDetail;
  return (
    <>
      <p>{courseDetail.part} {courseDetail.exercises}</p>
    </>
  )
}

const Total = (props) => {
  const getTotal = props.coursesDetails.map(courseDetail => courseDetail.exercises).reduce((a, b) => a + b);
  return (
    <>
      <p>{`Number of Exercises ${getTotal}`}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const coursesDetails = [
    {
      id: 1,
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      id: 2,
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      id: 3,
      part: 'State of a component',
      exercises: 14
    }

  ]

  return (
    <div>
      <Header course={course} />
      <Content coursesDetails={coursesDetails} />
      <Total coursesDetails={coursesDetails} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))