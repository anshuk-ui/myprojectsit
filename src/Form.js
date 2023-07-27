import React, { useState } from 'react';
import { TextField, FormControl, Button } from "@mui/material";


function ValidateForm(props) {
    const [validationMessages, setValidationMessages] = useState([]);
    const [formData, setFormData] = useState({});
    const handleChange = ({ target }) => {
     setFormData({ ...formData, [target.name]: target.value });
    }
    const handleClick = (evt) => {
        validateForm();
        if (validationMessages.length > 0) {
            evt.preventDefault();
        }
        console.log({"Name" : formData.fullName,"Email": formData.emailId,"Password" :formData.password })
    }
    const validateForm = () => {
        const { fullName, emailId ,password} = formData;
        setValidationMessages([]);
        let messages = [];
        if (!fullName) {
            messages.push("Name is required");
        }
        if (!emailId) {
            messages.push("Email is required");
        }
        if(!password){
          messages.push("assword is required");
        }
        setValidationMessages(messages);
    }
    return (
        <div >
        <h1>Form</h1>
            <form>
            
                <label>Name:</label>
                <input value={formData.fullName || ''} onChange={handleChange} type="text" name="fullName" />
                <br></br>
                <label>Email:</label>
                <input value={formData.emailId || ''} onChange={handleChange} type="text" name="emailId" />
                <br></br>
                <label>
                Password:
                </label>
                <input value={formData.password || ''} onChange ={handleChange} type="password" name="password" />
                <br></br>
                <button type="button" onClick={handleClick}>SUBMIT</button>
            </form>
            <br></br>
            <div>{validationMessages.length > 0 && <span>Validation Summary</span>}
                <ul>
                    {validationMessages.map(vm => <li key={vm}>{vm}</li>)}
                </ul>
            </div>
        </div>);
}

export default ValidateForm;