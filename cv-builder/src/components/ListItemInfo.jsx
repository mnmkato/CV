import "../styles/sections.css"
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiCloseCircleOutline } from '@mdi/js';

export default function ListItemInfo({sharedData , onDataChange }){
    
    if (!sharedData || !sharedData.languages) {
        return null; 
    }
    function handleInputChange(index, value) {
        const updatedLanguages = [...sharedData.languages];
        updatedLanguages[index] = value;
        onDataChange('languages', updatedLanguages);
    }
    function addEntry(params) {
        const updatedLanguages = [...sharedData.languages, '']; 
        onDataChange('languages', updatedLanguages);
    }
    function removeEntry(index) {
        const updatedLanguages = [...sharedData.languages];
        updatedLanguages.splice(index, 1);
        onDataChange('languages', updatedLanguages);
   }
    
return(
    <>
    {sharedData.languages.map((listItem, index) => (
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