import "../styles/sections.css"
import Icon from '@mdi/react';
import { mdiCloseCircleOutline } from '@mdi/js';

export default function ExperienceInfo({sharedData , onDataChange }){

    if (!sharedData || !sharedData.experience) {
        return null; 
    }
    function handleInputChange(index, name, value) {
        const updatedExperience = [...sharedData.experience];
        updatedExperience[index][name] = value;
        onDataChange('experience', updatedExperience);
    }
    function addEntry(params) {
        const updatedExperience = [...sharedData.experience, {
                            role:"",
                            company:"",
                            startDate:"",
                            endDate:"",
                            responsiblities:[""]
                            }
                        ]; 
        onDataChange('experience', updatedExperience);
    }
    function removeEntry(index) {
        const updatedExperience = [...sharedData.experience];
        updatedExperience.splice(index, 1);
        onDataChange('experience', updatedExperience);
   }
return(
    <>
    {sharedData.experience.map((listItem, index) => (
    <div className="entry" key={index}>
        <div className="experience_entry">
            <label htmlFor="workStartDateInput">Start date:</label>
            <input 
                type="text" 
                id="workStartDateInput" 
                value={listItem.startDate}
                onChange={(e) => handleInputChange(index, 'startDate', e.target.value)} />

            <label htmlFor="workEndDateInput">End date:</label>
            <input 
                type="text" 
                id="workEndDateInput"
                value={listItem.endDate}
                onChange={(e) => handleInputChange(index,  'endDate', e.target.value)} />

            <label htmlFor="workNameInput">Company name:</label>
            <input 
                type="text" 
                id="workNameInput"
                value={listItem.company}
                onChange={(e) => handleInputChange(index,  'company', e.target.value)} />

            <label htmlFor="workTitleInput">Role:</label>
            <input 
                type="text" 
                id="workTitleInput"
                value={listItem.role}
                onChange={(e) => handleInputChange(index,  'role', e.target.value)} />

            <label htmlFor="workTasksInput">Responsibilites:</label>
            <textarea 
                type="text" 
                id="workTasksInput"
                value={listItem.responsiblities}
                onChange={(e) => handleInputChange(index,  'responsiblities', e.target.value)} />
        </div>
        <button className="mdi-btn" onClick={() => removeEntry(index)}>
            <Icon path={mdiCloseCircleOutline} size={1} />
        </button>
    </div>
    ))}
    
    <button className="add-entry-btn" onClick={addEntry}>Add New</button>
    </>
)
}