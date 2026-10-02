import './App.css'


const Footer = (props) => {
  return (
    <footer>
    {props.fullName} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const program = {
    name: 'Bachelor of Information Technology',
    subject: [
    { name: 'Industry Electives',units: 3},
    { name: 'Project Management',units: 3},
    { name: 'Data Analytics',units: 3 }
  ]
}

const total = 
   program.subject[0].units + 
   program.subject[1].units +
   program.subject[2].units

const fullName = 'John Paul A. Cabating'
const courseCode = 'CSIT340'
const section = 'G8'


return (
    <div className='container'>
      <h1>{program.name}</h1>
        <hr/>
            <div className='subject'>
                <p>{program.subject[0].name} <br/>
                Units: {program.subject[0].units}
                </p>
                <p>{program.subject[1].name} <br/>
                Units: {program.subject[1].units}
                </p>
                <p>{program.subject[2].name} <br/>
                Units: {program.subject[2].units}
                </p>
            </div>
      <p>Total Units:{total}</p>
      <hr/>

      <Footer
        fullName = {fullName}
        courseCode = {courseCode}
        section = {section}
      />
    </div>
  )
  
}

export default App;