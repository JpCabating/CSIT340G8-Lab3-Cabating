import './App.css'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <hr></hr>
      <p>
        {props.subject1} 
        <br />Units:{props.units1}
      </p>
      <p>
        {props.subject2} 
        <br />Units:{props.units2}
      </p>
      <p>
        {props.subject3} 
        <br />Units:{props.units3}
      </p>
      <hr/>
    </div>
  )
}

const Total = (props) => {
  return <p>Total Amount of Units {props.total}</p>
}

const App = () => {
  const course = 'Bachelor of Information Technology'
  const subject1 = 'Industry Electives'
  const units1 = 3
  const subject2 = 'Project Management'
  const units2 = 3
  const subject3 = 'Data Analytics'
  const units3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        subject1={subject1}
        units1={units1}
        subject2={subject2}
        units2={units2}
        subject3={subject3}
        units3={units3}
      />
      <Total total={units1 + units2 + units3} />
    </div>
  )
  
}

export default App