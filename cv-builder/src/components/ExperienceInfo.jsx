import "../styles/sections.css"
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';

export default function ExperienceInfo(){
    function editForm(params) {
        
    }
    function submitForm(params) {
    }
    function addEntry(params){

    }
return(
    <>
    <div className="section">
    <div className="section-head">
    <h2>Experience Info</h2>
    <button className="edit-btn" onClick={editForm}>
    <Icon path={mdiPencil} size={1} />
    </button>
    </div>
    <div className="experience_entry">
    <label htmlFor="workStartDateInput">Start date:</label>
    <input type="date" id="workStartDateInput" />
    <label htmlFor="workEndDateInput">End date:</label>
    <input type="date" id="workEndDateInput" />
    <label htmlFor="workNameInput">Company name:</label>
    <input type="text" id="workNameInput" />
    <label htmlFor="workTitleInput">Position Title:</label>
    <input type="text" id="workTitleInput" />
    <label htmlFor="workTasksInput">Responsibilites:</label>
    <textarea type="text" id="workTasksInput" />
    <button className="add-entry-btn" onClick={addEntry}>Add New</button>
    </div>
    
    <button className="submit-btn" onClick={submitForm}>Submit</button>
    </div>
    </>
)
}