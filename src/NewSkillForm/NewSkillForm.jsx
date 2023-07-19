import './NewSkillForm.css'
import { useState } from 'react'

export default function NewSkillForm() {
  const [skill, setSkill] = useState({
    name: '',
    level: 3
  })

  function handleChange(e) {
    console.log(e.target.value)
    setSkill({ ...skill, [e.target.name]: e.target.value })
  }
  return (
    <form className="NewSkillForm">
      <label>Skill</label>
      <input
        type="text"
        name="name"
        value={skill.name}
        placeholder="Enter name..."
        onChange={handleChange}
      />
      <label>Level</label>
      <select id="levels">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button>ADD SKILL</button>
    </form>
  )
}
