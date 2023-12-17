import "../styles/sections.css"
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';


export default function PersonalInfo(){
     function editForm(params) {
        
    }
    function submitForm(params) {
    }
return(
    <>
    <div className="section">
    <div className="section-head">
    <h2>Personal Info</h2>
    <button className="edit-btn" onClick={editForm}>
    <Icon path={mdiPencil} size={1} />
    </button>
    </div>
    <label htmlFor="nameInput">Name:</label>
    <input type="text" id="nameInput" />
    <label htmlFor="emailInput">E-mail:</label>
    <input type="email" id="emailInput" />
    <label htmlFor="phoneInput">Phone Number:</label>
    <input type="number" id="phoneInput" />
    <button className="submit-btn" onClick={submitForm}>Submit</button>
    </div>
    </>
    )
}