import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo'
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'
import CvPreview from './components/CvPreview'
import Section from './components/Section'
import ListItemInfo from './components/ListItemInfo'
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
        <Section name={"Languages"} body={<ListItemInfo />} />
        <Section name={"Skills"} body={<ListItemInfo />} />
        <Section name={"Education Info"} body={<EducationInfo />} />
        <Section name={"Experience Info"} body={<ExperienceInfo/>} />
      </div>
      <CvPreview  sharedData={sharedData}/>
      </div>
    </>
  )
}

export default App
