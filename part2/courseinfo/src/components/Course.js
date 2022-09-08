const Header = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
      </div>
    )
  }
  
  const Part = (props) => {
    return(
      <div>
        <p>
          {props.part} {props.exercise}
        </p>
      </div>
    )
  }
  
  const Content = (props) => {
    return(
      <div>
        {props.parts.forEach(element => {
          <Part part={element} exercise={element}/>
        })}
      </div>
    )
  }
  
  const Total = (props) => {
    return(
      <div>
        <p><strong>total of {props.parts.reduce( (total, exercise) => {
           return total += exercise.exercises}, 0)} exercises</strong></p>
      </div>
    )
  }
  
  const Course = (props) => {
    return(
      <div>
        <Header name={props.course.name}/>
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts} />
      </div>
    )
  }

export default Course