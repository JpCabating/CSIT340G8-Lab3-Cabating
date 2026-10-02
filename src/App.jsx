import './App.css'

const App = () => {

  const course = 'Bachelor of Information Technology'
  const subject = [ {
    name: 'Industry Electives',
    units: 3
  },
  {
    name: 'Project Management',
    units: 3
  },
  {
    name: 'Data Analytics',
    units: 3
  }
]

const total = subject.reduce((sum, item) => sum + item.units, 0)
  


  return (
    <div>
      <h1>{course}</h1>
      <hr/>
      {subject.map((item) => (
        <p>
          {item.name}<br/>
          Units: {item.units}
        </p>
      ))}

      <p>Total Units:{total}</p>
      <hr/>


    </div>
  )
  
}

export default App;