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

    function handleResInputChange(expIndex, resIndex, value) {
        const updatedExperience = [...sharedData.experience];
        updatedExperience[expIndex].responsibilities[resIndex] = value;
        onDataChange('experience', updatedExperience);
    }

    function addResEntry(expIndex) {
        const updatedExperience = [...sharedData.experience];
        updatedExperience[expIndex].responsibilities.push("");
        onDataChange('experience', updatedExperience);
    }

    function removeResEntry(expIndex, resIndex) {
        const updatedExperience = [...sharedData.experience];
        updatedExperience[expIndex].responsibilities.splice(resIndex, 1);
        onDataChange('experience', updatedExperience);
    }


return(
    <>
    {sharedData.experience.map((listItem, index) => (
    <div className="entry" key={index}>
        <button className="mdi-btn btn-close" onClick={() => removeEntry(index)}>
            <Icon path={mdiCloseCircleOutline} size={1} />
        </button>
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
    
        {listItem.responsibilities.map((resItem, resIndex) => (
            <div className="res-div" key={resIndex}>
                <button className="mdi-btn" onClick={() => removeResEntry(index, resIndex)}>
                    <Icon path={mdiCloseCircleOutline} size={1} />
                </button>
                <textarea
                    type="text"
                    rows="5"
                    value={resItem}
                    onChange={(e) => handleResInputChange(index, resIndex, e.target.value)}
                />
                
            </div>
        ))}
        <button className="add-entry-btn" onClick={() => addResEntry(index)}>Add responsibility</button>
    
    
    </div>
    ))}
    
    <button className="add-entry-btn" onClick={addEntry}>Add New</button>
    </>
)
}