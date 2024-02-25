import "../styles/sections.css"
import react, {useEffect, useState} from 'react'

export default function PersonalInfo({sharedData , onDataChange }){
   
    const handleInput = (e)=>{
        const { name, value } = e.target;
        onDataChange(name, value)
    }
return(
    <>
    <label htmlFor="nameInput">Name:</label>
    <input type="text" id="nameInput" name={'name'} value={sharedData.name} onChange={handleInput} />

    <label htmlFor="phoneInput">Phone Number:</label>
    <input type="tel" id="phoneInput"  name={'phone'} value={sharedData.phone} onChange={handleInput}  />

    <label htmlFor="emailInput">E-mail:</label>
    <input type="email" id="emailInput" name={'email'} value={sharedData.email} onChange={handleInput}  />

    <label htmlFor="placeInput">Address:</label>
    <input type="text" id="placeInput" name={'address'} value={sharedData.address} onChange={handleInput}  />
    
    <label htmlFor="roleInput">Professional role:</label>
    <input type="text" id="roleInput" name={'role'} value={sharedData.role} onChange={handleInput}  />
    
    <label htmlFor="summaryInput">Summary:</label>
    <textarea rows="7" id="summaryInput" name={'summary'} value={sharedData.summary} onChange={handleInput}  />
    </>
    )
}