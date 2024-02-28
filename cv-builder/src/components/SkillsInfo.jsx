import "../styles/sections.css"
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiCloseCircleOutline } from '@mdi/js';

export default function SkillsInfo({sharedData , onDataChange }){
    
    if (!sharedData || !sharedData.skills) {
        return null; 
    }
    function handleInputChange(index, value) {
        const updatedSkills = [...sharedData.skills];
        updatedSkills[index] = value;
        onDataChange('skills', updatedSkills);
    }
    function addEntry() {
        const updatedSkills = [...sharedData.skills, '']; 
        onDataChange('skills', updatedSkills);
    }
    function removeEntry(index) {
        const updatedSkills = [...sharedData.skills];
        updatedSkills.splice(index, 1);
        onDataChange('skills', updatedSkills);
   }
    
return(
    <>
    {sharedData.skills.map((listItem, index) => (
        <div className="listItem-entry" key={index}>
          <input
            type="text"
            value={listItem}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
            <button className="mdi-btn" onClick={() => removeEntry(index)}>
            <Icon path={mdiCloseCircleOutline} size={1} />
        </button>
        </div>
    ))}
    <button className="add-entry-btn" onClick={addEntry}>Add New</button>
    </>
    )
}