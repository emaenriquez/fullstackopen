// import './App.css'

const App = () => {

  const CourseObj = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component',  exercises: 14}
    ]
  }
  const Header = ({name}) => {
    return (
      <h1>{name}</h1>
    )
  }

  const Content = ({part,exercises}) => {
    return (
      <p>{part} {exercises}</p>
    )
  }

  const Total = () => {
    return (
      <p>Number of exercises {CourseObj.parts[0].exercises + CourseObj.parts[1].exercises  + CourseObj.parts[2].exercises }</p>
    )
  }

  return (
    <div>
      
      {/* <Header course={course} /> */}
      <Header name={CourseObj.name}></Header>
      
      <Content part={CourseObj.parts[0].name} exercises={CourseObj.parts[0].exercises}></Content>
      <Content part={CourseObj.parts[1].name} exercises={CourseObj.parts[1].exercises}></Content>
      <Content part={CourseObj.parts[2].name} exercises={CourseObj.parts[2].exercises}></Content>

      <Total></Total>

    </div>
  )
}
export default App