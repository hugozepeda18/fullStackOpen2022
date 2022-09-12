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
          {props.name} {props.exercises}
        </p>
      </div>
    )
  }
  
  const Content = (props) => {
    return(
      <div>
        {props.parts.map(parts => {
          <Part name={parts.name} exercises={parts.exercises}/>
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