import './App.css'


const Total = (props) => {
  return <p>Total Amount of Units {props.total}</p>
}

const App = () => {

  const course = 'Bachelor of Information Technology'
  const subject1 = {
    name: 'Industry Electives',
    units: 3
  }
  const subject2 = {
    name: 'Project Management',
    units: 3
  }
  const subject3 = {
    name: 'Data Analytics',
    units: 3
  }

  const total = subject1.units + subject2.units + subject3.units

  


  return (
    <div>
      <h1>{course}</h1>
      <hr/>
      <p>{subject1.name}<br/>
      Units: {subject1.units}</p>
      <p>{subject2.name}<br/>
      Units: {subject2.units}</p>
      <p>{subject3.name}<br/>
      Units: {subject3.units}</p>
      <hr/>
      <p>Total Amount of Units: {total}</p>


    </div>
  )
  
}

export default App