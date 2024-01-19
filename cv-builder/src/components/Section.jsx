import { useState } from "react";
import "../styles/sections.css"
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';

export default function Section(props){
    const [sectionHidden, setSectionHidden] = useState(true);
    function editForm(params) {
        setSectionHidden(current => !current)
    }
return(
    <>
    <div className="section">
    <div className="section-head">
        <h2>{props.name}</h2>
        <button className="mdi-btn" onClick={editForm}>
            <Icon path={mdiPencil} size={1} />
        </button>
    </div>
    <div className={sectionHidden ? "section-body hidden" : "section-body"}>
       {props.body}
    </div>
    </div>
    </>
    )
}