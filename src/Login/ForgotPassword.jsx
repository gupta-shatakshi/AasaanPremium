import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from './forgotPassword.module.css';
import {FaLock, FaUserCircle} from "react-icons/fa";
import Button from '@mui/material/Button';
import bg from "../Login/bg.png";
import { useHistory } from "react-router";


const ForgotPassword = () => {

  const history = useHistory();

  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    var valid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;

    if (!newPassword) {
      setNewPasswordError(prev => prev = "New Password cannot be blank");
    }
    else if(newPassword.length < 8){
      setNewPasswordError(prev => prev = "New Password must be 8 characters long");
    }
    else if(!newPassword.match(valid)){
      setNewPasswordError(prev => prev = "Include an uppercase, a special character & a number");
    }
    else{
      setNewPasswordError(prev => prev = "");
    }
    if (!password) {
      setPasswordError(prev => prev = "Password cannot be blank");
    }
    else if(password.length < 8){
      setPasswordError(prev => prev = "Password must be 8 characters long");
    }
    // else if(!password.match(/^[A-Z]+$/i)){
    //   setPasswordError(prev => prev = "Strong Password must contain atleast an uppercase and a lowercase character");
    // }
    
    else if(password !== newPassword){
      setPasswordError(prev => prev = "Password did not match");
    }
    else{
      setPasswordError(prev => prev = "");
    }


  
    if (newPassword || passwordError) {
      setNewPassword(newPassword);
      setPassword(password);

      return false;
    }
    
      // const newEntry = {
      //   email: email,
      //   password: password,
      // }
      // setEntry([...entry, newEntry]);
      // setEmail(prev => prev = "");
      // setPassword(prev => prev = "");
      // console.log(entry);
    
      return true;
  }

  return (
    <>
    <section className={classes.contentStart}>
      <div className={classes.image}>
        <img src={bg} alt="Loading..." />
      </div>
      
      <div className={classes.outerContent}>
      <form action="" onSubmit={handleSubmit}>
        <div className={classes.innerContent}>
        <div className={classes.divBlock}>
          <div className={classes.user}><FaUserCircle /></div>
          <div className={classes.heading}> Forgot Password </div>
        </div>
        <div className={classes.divBlock}>
          <label htmlFor="newPassword"><FaLock/></label>
          <input type="text" name="newPassword"value={newPassword} id="newPassword" 
          autoComplete="off" placeholder="Create a new password"
          onChange={(e)=> setNewPassword(e.target.value)} 
          // required
          />
        </div>
        <div style={{ fontSize: 14, color: "red" }}>
            {newPasswordError}
        </div>
        <div className={classes.divBlock}>
          <label htmlFor="password"><FaLock/></label>
          <input type="text" name="password"value={password} id="password" 
          autoComplete="off" placeholder="Confirm password"
          onChange={(e)=> setPassword(e.target.value)} 
          // required
          />
        </div>
        <div style={{ fontSize: 14, color: "red" }}>
            {passwordError}
        </div>
        </div>
        <div className={classes.downContent}>
          <NavLink to="/login">
            <p className={classes.login}> Login ?</p>
          </NavLink>
        </div>


        {/* <button className={classes.btn} type="submit"> Login</button> */}
        <Button className={classes.btn} type="submit" 
        variant="contained" color="primary" >
          Done
        </Button>
      </form>

      </div>
      
    </section>  
    </>

  );
}

export default ForgotPassword;