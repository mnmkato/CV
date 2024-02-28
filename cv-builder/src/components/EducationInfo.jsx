import "../styles/sections.css"
import Icon from '@mdi/react';
import { mdiCloseCircleOutline } from '@mdi/js';

export default function EducationInfo(){

    if (!sharedData || !sharedData.education) {
        return null; 
    }
    function handleInputChange(index, name, value) {
        const updatedEducation = [...sharedData.education];
        updatedEducation[index][name] = value;
        onDataChange('education', updatedEducation);
    }
    function addEntry(params) {
        const updatedEducation = [...sharedData.education,{name:"", award:"", startDate:"", endDate:""} ]; 
        onDataChange('education', updatedEducation);
    }
    function removeEntry(index) {
        const updatedEducation = [...sharedData.education];
        updatedEducation.splice(index, 1);
        onDataChange('education', updatedEducation);
   }

return(
    <>
     {sharedData.education.map((listItem, index) => (
        <div className="entry" key={index}>
            <div className="educ_entry">
                <label htmlFor="studyStartDateInput">Start date:</label>
                <input 
                    type="date" 
                    id="studyStartDateInput"
                    value={listItem.startDate}
                    onChange={(e) => handleInputChange(index, 'startDate', e.target.value)} />
               
                <label htmlFor="studyEndDateInput">End date:</label>
                <input 
                    type="date" 
                    id="studyEndDateInput"
                    value={listItem.endDate}
                    onChange={(e) => handleInputChange(index,  'endDate', e.target.value)} />
               

                <label htmlFor="SchoolNameInput">School name:</label>
                <input 
                    type="text" 
                    id="SchoolNameInput"
                    value={listItem.name}
                    onChange={(e) => handleInputChange(index, 'name', e.target.value)} />

                <label htmlFor="studyTitleInput">Award:</label>
                <input 
                    type="text" 
                    id="studyTitleInput" 
                    value={listItem.award}
                    onChange={(e) => handleInputChange(index,  'award', e.target.value)} />
               
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