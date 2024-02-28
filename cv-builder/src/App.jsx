import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo'
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'
import CvPreview from './components/CvPreview'
import Section from './components/Section'
import ListItemInfo from './components/ListItemInfo'
import SkillsInfo from './components/SkillsInfo'
import "./App.css"
import {personal} from './data.js'
function App() {
 const [sharedData,setSharedData]=useState(personal)

 const handleDataChange = (key,value) =>{
  setSharedData(
    prevState => ({
      ...prevState,
      [key]: value
    })
  );
 }

  return (
    <>
      <div className="container">
      <div>
      <Section name={"Personal Info"} body={<PersonalInfo sharedData={sharedData} onDataChange={handleDataChange} />} />
        <Section name={"Languages"} body={<ListItemInfo sharedData={sharedData} onDataChange={handleDataChange} />} />
        <Section name={"Skills"} body={<SkillsInfo sharedData={sharedData} onDataChange={handleDataChange} />} />
        <Section name={"Experience Info"} body={<ExperienceInfo sharedData={sharedData} onDataChange={handleDataChange} />} />
        <Section name={"Education Info"} body={<EducationInfo sharedData={sharedData} onDataChange={handleDataChange} />} />
      </div>
      <CvPreview  sharedData={sharedData}/>
      </div>
    </>
  )
}

export default App
