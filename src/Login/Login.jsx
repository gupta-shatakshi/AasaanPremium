import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from './login.module.css';
import {FaEnvelope, FaLock, FaUserCircle} from "react-icons/fa";
import Button from '@mui/material/Button';
import bg from "../Login/bg.png";
import { useHistory } from "react-router";

const Login = () => {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [entry, setEntry] = useState([]);



  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    var validEmail = /^[a-zA-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;

    if(email === "admin@gmail.com" && password === "Admin@123"){
      setEmailError(prev => prev = "");
      setPasswordError(prev => prev = "");
      alert(`Congrats ${email}, you are logged in successfully`);
      setEmail(prev => prev = "");
      setPassword(prev => prev = "");
      history.push('./services');
    }
    else{
      alert('Invalid credentials');
    }

    if (!email) {
      setEmailError(prev => prev = "Email required");
    }
    else if (!email.includes("@")) {
      setEmailError(prev => prev = "Email must contain '@' ");
    }
    else if(email.endsWith('@') || email.startsWith('@')){
      setEmailError(prev => prev = "Invalid Email");
    }
    else if(!email.match(validEmail)){
      setEmailError(prev => prev = "Invalid Email Format")
    }
    else{
      setEmailError(prev => prev = "");
    }

    if (!password) {
      setPasswordError(prev => prev = "Password cannot be blank");
    }
    else if(password.length < 8){
      setPasswordError(prev => prev = "Password must be 8 characters long");
    }
    else{
      setPasswordError(prev => prev = "");
    }
  
    if (emailError || passwordError) {
      setEmail(email);
      setPassword(password);

      return false;
    }
    return true;


      // const newEntry = {
      //   email: email,
      //   password: password,
      // }
      // setEntry(()=>{
      //   return [...entry,newEntry]
      // } )
  
      // setEmail(prev => prev = "");
      // setPassword(prev => prev = "");
      // console.log(entry);
    
 

    // const newEntry = {
    //   email: email,
    //   password: password,
    // }
    // setEntry([...entry, newEntry]);
    // setEmail("");
    // setPassword("");
    // console.log(entry);


  }

  

  return (
    <>
    <section className={classes.contentStart}>
      <div className={classes.image}>
        <img src={bg} alt="Loading..." />
      </div>
      
      <div className={classes.outerContent}>
      <form onSubmit={(e) =>handleSubmit(e)}>
        <div className={classes.innerContent}>
        <div className={classes.divBlock}>
          <div className={classes.user}><FaUserCircle /></div>
          <div className={classes.heading}> Login </div>
          
          <label htmlFor="email"><FaEnvelope /></label>
          <input type="text" name="email" value={email} id="email"
          autoComplete="off" placeholder="Email ID"
          onChange={(e)=> setEmail(e.target.value)} 
          // required
          />
        </div>
        <div style={{ fontSize: 14, color: "red" }}>
            {emailError}
          </div>
        <div className={classes.divBlock}>
          <label htmlFor="password"><FaLock/></label>
          <input type="password" name="password"value={password} id="password" 
          autoComplete="off" placeholder="Password"
          onChange={(e)=> setPassword(e.target.value)} 
          // required
          />
        </div>
        <div style={{ fontSize: 14, color: "red" }}>
            {passwordError}
          </div>
        </div>
        <div className={classes.downContent}>
          <div className={classes.input}>
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember Me</label>
          </div>
          <NavLink to="/forgotPassword">
            <p className={classes.forgotpwd}> Forgot Password ?</p>
          </NavLink>
      </div>
              
        <NavLink to="/signup">
          <p className={classes.newAccount}> Create a new account </p>
        </NavLink>

        {/* <button className={classes.btn} type="submit"> Login</button> */}
        <Button className={classes.btn} type="submit" variant="contained" color="success">
          Login
        </Button>
      </form>

      </div>
      
    </section>  
    </>

  );
}

export default Login;