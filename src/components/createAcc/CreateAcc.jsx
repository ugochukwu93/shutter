import React from 'react';
import HomeCarousel from '../carousel/HomeCarousel';
import FormInput from "../FormInput"
import FormSelect from "../FormSelect"
import { Link } from "react-router-dom";
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../createAcc/CreateAcc.styles.css'


const CreateAcc=()=>{
  
  return (
    <div className='container'>
      <div className='form-container'>
        <h2>Create an account</h2>
        <p>Create an account to continue</p>
        <FormInput 
          label="Email"
        />
        <FormInput 
          label="Password"
        />
        <FormInput 
          label="Confirm Password"
        />
        <FormSelect/>
        <Button variant="contained" style={{marginLeft: "8px", width: "300px", height: "60px", background:"#2994FF"}}> <Link to="/dashboardHome/dashboard" style={{ color: 'inherit', textDecoration: 'inherit'}}>Get started</Link></Button>
      </div>
      <div>
        <HomeCarousel/>
      </div>
    </div>
   
  )
}
 
export default CreateAcc;
