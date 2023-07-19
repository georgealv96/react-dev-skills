import SkillList from './SkillList/SkillList'
import NewSkillForm from './NewSkillForm/NewSkillForm'
import './App.css'
import { useState } from 'react'

const skillsData = [
  { name: 'HTML', level: 5 },
  { name: 'CSS', level: 3 },
  { name: 'JavaScript', level: 4 },
  { name: 'Python', level: 2 }
]

function App() {
  const [skills, setSkills] = useState(skillsData)

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm />
    </div>
  )
}

export default App
