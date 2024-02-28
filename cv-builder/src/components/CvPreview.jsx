import "../styles/CvPreview.css"
import Icon from '@mdi/react';
import { mdiPhone,mdiEmail,mdiMapMarker } from '@mdi/js';

export default function CvPreview({sharedData}) {
    
    return(
    <div className="preview-container">
    <div className="cv-heading">
        <h1>{sharedData.name}</h1>
        <h2>{sharedData.role}</h2>
    </div>
    <div className="cv-content">
        <div className="personal-unit">
            <h3 className="unit-heading">ABOUT ME</h3>
            <p className="summary-text">{sharedData.summary}</p>
            <div className="contact-info">
                <div className="icon">
                <Icon path={mdiPhone} size={1} />
                </div>
                <p>{sharedData.phone}</p>
                </div>
            <div className="contact-info">
                <div className="icon">
                <Icon path={mdiEmail} size={1} />
                </div>
                <p>{sharedData.email}</p>
            </div>
            <div className="contact-info">
                <div className="icon">
                <Icon path={mdiMapMarker} size={1} />
                </div>
                <p>{sharedData.address}</p>
            </div>
            <h3 className="unit-heading">LANGUAGES</h3>
            <ul>
                {sharedData.languages.map(language=>{return <li key={sharedData.languages.indexOf(language)}>{language}</li>})}
            </ul>
            <h3 className="unit-heading">SKILLS</h3>
            <ul>
                {sharedData.skills.map(skill=>{return <li key={sharedData.skills.indexOf(skill)}>{skill}</li>})}
            </ul>
        </div>
        <div className="experience-unit">
            <h3 className="unit-heading">EXPERIENCE</h3>
            {sharedData.experience.map(item=>{return (
            <div className="unit-item" key={sharedData.experience.indexOf(item)}>
            <p className="main-text">{item.company}</p>
            <p className="main-text">{item.role}</p>
            <p className="main-text">{item.startDate} - {item.endDate}</p>
            <ul>
            {item.responsibilities.map(responsiblity=>{return <li key={item.responsibilities.indexOf(responsiblity)}>{responsiblity}</li>})}
            </ul>
            </div>
            )
            })}
        </div>
        <div className="education-unit">        
            <h3 className="unit-heading">EDUCATION</h3>
            {sharedData.education.map(item=>{return (
            <div className="unit-item" key ={sharedData.education.indexOf(item)}>
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