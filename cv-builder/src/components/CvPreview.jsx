import "../styles/CvPreview.css"
import {personal, education, experience} from "../data.js"
import Icon from '@mdi/react';
import { mdiPhone,mdiEmail,mdiMapMarker } from '@mdi/js';

export default function CvPreview() {
    
    return(
    <div className="preview-container">
    <div className="cv-heading">
        <h1>{personal.name}</h1>
        <h2>{personal.role}</h2>
    </div>
    <div className="cv-content">
        <div className="personal-unit">
            <h3 className="unit-heading">ABOUT ME</h3>
            <p className="summary-text">{personal.summary}</p>
            <div className="contact-info">
                <div className="icon">
                <Icon path={mdiPhone} size={1} />
                </div>
                <p>{personal.phone}</p>
                </div>
            <div className="contact-info">
                <div className="icon">
                <Icon path={mdiEmail} size={1} />
                </div>
                <p>{personal.email}</p>
            </div>
            <div className="contact-info">
                <div className="icon">
                <Icon path={mdiMapMarker} size={1} />
                </div>
                <p>{personal.address}</p>
            </div>
            <h3 className="unit-heading">LANGUAGES</h3>
            <ul>
                {personal.languages.map(item=>{return <li>{item}</li>})}
            </ul>
            <h3 className="unit-heading">SKILLS</h3>
            <ul>
                {personal.skills.map(item=>{return <li>{item}</li>})}
            </ul>
        </div>
        <div className="experience-unit">
            <h3 className="unit-heading">EXPERIENCE</h3>
            {experience.map(item=>{return (
            <div className="unit-item">
            <p className="main-text">{item.company}</p>
            <p className="main-text">{item.role}</p>
            <p className="main-text">{item.startDate} - {item.endDate}</p>
            <ul>
            {item.responsiblities.map(item=>{return <li>{item}</li>})}
            </ul>
            </div>
            )
            })}
        </div>
        <div className="education-unit">        
            <h3 className="unit-heading">EDUCATION</h3>
            {education.map(item=>{return (
            <div className="unit-item">
            <p className="main-text">{item.name}</p>
            <p>{item.award}</p>
            <p>{item.startDate} - {item.endDate}</p>
            </div>
            )
            })}
        </div>
    </div>
    </div>
    )
}