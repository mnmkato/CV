import "../styles/sections.css"
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiCloseCircleOutline } from '@mdi/js';

export default function ExperienceInfo(){
    const [listItems, setListItems] = useState([
        {
        role:"",
        company:"",
        startDate:"",
        endDate:"",
        responsiblities:[""]
        }
    ]);

    function submitForm(params) {
        
    }
    function addEntry(params){
        setListItems([...listItems, 
            {
                role:"",
                company:"",
                startDate:"",
                endDate:"",
                responsiblities:[""]
                }
        ]);
    }
    function removeEntry(index) {
        const newListItems = [...listItems];
        newListItems.splice(index, 1);
        setListItems(newListItems);
   }
   function handleInputChange(index, field, value) {
        const newListItems = [...listItems];
        newListItems[index][field] = value;
        setListItems(newListItems);
}
return(
    <>
    {listItems.map((listItem, index) => (
    <div className="entry" key={index}>
        <div className="experience_entry">
            <label htmlFor="workStartDateInput">Start date:</label>
            <input 
                type="date" 
                id="workStartDateInput" 
                value={listItem.startDate}
                onChange={(e) => handleInputChange(index, 'startDate', e.target.value)} />

            <label htmlFor="workEndDateInput">End date:</label>
            <input 
                type="date" 
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
    <button className="submit-btn" onClick={submitForm}>Submit</button>
    </>
)
}