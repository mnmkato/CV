import "../styles/sections.css"

export default function PersonalInfo(){
    
    function submitForm(params) {
        
    }
return(
    <>
    <label htmlFor="nameInput">Name:</label>
    <input type="text" id="nameInput" />

    <label htmlFor="phoneInput">Phone Number:</label>
    <input type="tel" id="phoneInput" />

    <label htmlFor="emailInput">E-mail:</label>
    <input type="email" id="emailInput" />

    <label htmlFor="placeInput">Address:</label>
    <input type="text" id="placeInput" />
    
    <label htmlFor="roleInput">Professional role:</label>
    <input type="text" id="roleInput" />
    
    <label htmlFor="summaryInput">Summary:</label>
    <textarea rows="7" id="summaryInput" />
    
    <button className="submit-btn" onClick={submitForm}>Submit</button>
    </>
    )
}