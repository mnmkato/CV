import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo'
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'
import CvPreview from './components/CvPreview'
import "./App.css"

function App() {
 
  return (
    <>
      <div className="container">
      <PersonalInfo />
      <EducationInfo />
      <ExperienceInfo/>
      <CvPreview />
      </div>
    </>
  )
}

export default App
