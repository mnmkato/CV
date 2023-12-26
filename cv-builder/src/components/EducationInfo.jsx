import "../styles/sections.css"
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';

export default function EducationInfo(){
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
    <h2>Education Info</h2>
    <button className="edit-btn" onClick={editForm}>
    <Icon path={mdiPencil} size={1} />
    </button>
    </div>
    <div className="educ_entry">
    <label htmlFor="studyStartDateInput">Start date:</label>
    <input type="date" id="studyStartDateInput" />
    <label htmlFor="studyEndDateInput">End date:</label>
    <input type="date" id="studyEndDateInput" />
    <label htmlFor="SchoolNameInput">School name:</label>
    <input type="text" id="SchoolNameInput" />
    <label htmlFor="studyTitleInput">Title of Study:</label>
    <input type="text" id="studyTitleInput" />
    <button className="add-entry-btn" onClick={addEntry}>Add New</button>
    </div>
    
    <button className="submit-btn" onClick={submitForm}>Submit</button>
    </div>
    </>
)
}