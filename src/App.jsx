import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm'
import './App.css'

function App() {
  return (
    <>
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr />
      <NewSkillForm />
    </>
  )
}

export default App
