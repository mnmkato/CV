import "../styles/sections.css"
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiCloseCircleOutline } from '@mdi/js';

export default function ListItemInfo(){
    const [listItems, setListItems] = useState(['']);

    function submitForm(params) {
        
    }
    function addEntry(params) {
         setListItems([...listItems, '']);
    }
    function removeEntry(index) {
        const newListItems = [...listItems];
        newListItems.splice(index, 1);
        setListItems(newListItems);
   }
   function handleInputChange(index, value) {
        const newListItems = [...listItems];
        newListItems[index] = value;
        setListItems(newListItems);
   }
return(
    <>
    {listItems.map((listItem, index) => (
        <div className="entry" key={index}>
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
    <button className="submit-btn" onClick={submitForm}>Submit</button>
    </>
    )
}