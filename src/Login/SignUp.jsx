/* global gapi */

import {React, useState,useEffect} from "react";
import classes from './signup.module.css';
import {FaEnvelope, FaLock, FaUserTie, FaSignInAlt} from "react-icons/fa";
// import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";

    var validPwd =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;
    var validEmail = /^[a-zA-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
    var btn_class=classes.deactivate

    const SignUp = () => {

    const [fNameError,setFNameError]=useState(false)
    const [lNameError,setLNameError]=useState(false)
    const [emailError,setEmailError]=useState(false)
    const [passwordError,setPasswordError]=useState(false)
    const [newPasswordError,setNewPasswordError]=useState(false)

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [redirect,setRedirect]=useState(false)

    useEffect(()=>{
      if(emailError===false && fNameError===false && lNameError===false
        && passwordError===false && newPasswordError===false
        ){
            btn_class=classes.btn;
        }
    },[emailError,fNameError,lNameError,passwordError,newPasswordError,password,newPassword])

    useEffect(()=>{
      if(password.length === 0){
        setPasswordError('');
      }
      else if(password.length <8)
        setPasswordError('At least 8 characters required')
      else if (!password.match(validPwd))
        setPasswordError('Must include a special character , a number and an uppercase')
      else
        setPasswordError(false)
    },[password,setPassword])


    useEffect(()=>{
      if(newPassword!==password)
        setNewPasswordError("Password didn't match")
      else
        setNewPasswordError(false)
    },[newPassword,setNewPassword])

    useEffect(()=>{
      if(fName.length > 0 && fName.length <= 2)
        setFNameError('At least 3 characters required')
      else
        setFNameError(false)
    },[fName,setFName])



    useEffect(()=>{
      if(lName.length > 0 && lName.length <= 2)
        setLNameError('At least 3 characters required')
      else
        setLNameError(false)
    },[lName,setLName])

    useEffect(()=>{
      if(email.length === 0){
        setEmailError('');
      }
      else if(email.length <= 4)
        setEmailError('Too short to be an email')
      else if(!email.includes('@')){
        setEmailError('Email must contain "@"')
      }
      else if (email.endsWith('@') || email.startsWith('@') || !email.match(validEmail))
        setEmailError('Invalid format')
      else
        setEmailError(false)
    },[email,setEmail])


    const fNameHandler =(e)=>{
      setFName(e.target.value)
    }
    const lNameHandler =(e)=>{
      setLName(e.target.value)
    }
    const emailHandler =(e)=>{
      setEmail(e.target.value)
    }
    const passwordHandler =(e)=>{
      setPassword(e.target.value)
    }
    const newPasswordHandler =(e)=>{
      setNewPassword(e.target.value)
    }


    const handleSubmit = (e) => {

      e.preventDefault();
      if(newPasswordError===false && btn_class===classes.btn)
      {
        alert('Account created succesfully')
        setRedirect(true)
      }
      else
        alert('Try again')
      setNewPassword('')
      setLName('')
      setFName('')
      setEmail('')
      setPassword('')
    }

    const onSignIn = (googleUser) => {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); 
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
      }

        return(
            <>
            
        <section className={classes.contentStart}>
          <div className={classes.image}>
            <h2>Welcome</h2>
            <img src="https://www.transparentpng.com/thumb/business/business-free-png-16.png" alt="" />
          </div>
          
          <div className={classes.outerContent}>
          <form  onSubmit={handleSubmit}>
            <div className={classes.innerContent}>
            <div className={classes.user}> <FaSignInAlt /></div>
            <div className={classes.heading}> Sign Up </div>
            <div className={classes.name}>
                <div className={classes.divBlock}>
                <label htmlFor="fName"><FaUserTie /></label>
                <input type="text" name="fName" value={fName} id="fName"
                autoComplete="off" placeholder="First Name" value={fName}
                  onChange={fNameHandler}
                  
                // required
                />
                <div style={{ fontSize: 14, color: "red" }}>
                  {fNameError}
                </div>
                </div>
                <div className={classes.divBlock}>
                <label htmlFor="lName"><FaUserTie /></label>
                <input type="text" name="lName" value={lName} id="lName"
                autoComplete="off" placeholder="Last Name" value={lName}
                  onChange={lNameHandler} 
                // required
                />
                <div style={{ fontSize: 14, color: "red" }}>
                  {lNameError!==false && lNameError}
                </div>

                {/* {lNameError &&
                <div style={{ fontSize: 14, color: "red" }}>
                  
                </div>
                } */}
  
                </div>
            </div>
            
            <div className={classes.divBlock}>
              <label htmlFor="email"><FaEnvelope /></label>
              <input type="text" name="email" value={email} id="email"
              className={classes.email} autoComplete="off" placeholder="Email ID"
              onChange={emailHandler}  value={email}
              // required
              />
              <div style={{ fontSize: 14, color: "red" }}>
                  {emailError !==false && emailError}
              </div>
            </div>
            
            {/* <div className={classes.password}> */}
                <div className={classes.divBlock}>
                <label htmlFor="password"><FaLock/></label>
                <input type="text" name="password"value={password} id="password" 
                className={classes.password} autoComplete="off" placeholder="Create a password"
                value={password} onChange={passwordHandler}
                // required
                />
                <div style={{ fontSize: 14, color: "red" }}>
                  {passwordError !==false && passwordError}
                </div>
                </div>
                <div className={classes.divBlock}>
                <label htmlFor="newPassword"><FaLock/></label>
                <input type="text" name="newPassword"value={newPassword} id="newPassword" 
                autoComplete="off" placeholder="Confirm password"
                className={classes.password} value={newPassword} onChange={newPasswordHandler}
                // required
                />
                <div style={{ fontSize: 14, color: "red" }}>
                  {newPasswordError!==false && newPasswordError}
                </div>
                </div>
            {/* </div> */}
            </div>
            <div className={classes.downContent}>
            <div className={classes.input}>
            </div>
            <NavLink to="/login">
              <p className={classes.login}> Already a user? Login</p>
            </NavLink>
          </div>

          <div className="g-signin2"
                        //  className={Styles.signInWithGoogle} 
                         data-onsuccess={onSignIn}/><br />

            <button className={btn_class}  type="submit" variant="contained" color="primary" id='signup_btn'>
              Sign Up
            </button>
          </form>
          {redirect && <Redirect to='/login'/>}
          </div>
          
        </section>  
            </>
        )
    }

export default SignUp;









// import {React, useState} from "react";
// import classes from './signup.module.css';
// import {FaEnvelope, FaLock, FaUserTie, FaSignInAlt} from "react-icons/fa";
// import Button from '@mui/material/Button';
// import { NavLink } from "react-router-dom";


// const SignUp = () => {

// const [fName, setFName] = useState("");
// const [lName, setLName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [newPassword, setNewPassword] = useState("");

// const [entry, setEntry] = useState([]);

// const [fNameError, setFNameError] = useState("");
// const [lNameError, setLNameError] = useState("");
// const [emailError, setEmailError] = useState("");
// const [passwordError, setPasswordError] = useState("");
// const [newPasswordError, setNewPasswordError] = useState("");

// const handleSubmit = (e) => {
//   e.preventDefault();

//   var validPwd =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;
//   var validEmail = /^[a-zA-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
  
//   if (!fName) {
//     setFNameError(prev => prev = "First Name cannot be blank");
//   }
//   else{
//     setFNameError(prev => prev = "");
//   }
//   if (!lName) {
//     setLNameError(prev => prev = "Last Name cannot be blank");
//   }
//   else{
//     setLNameError(prev => prev = "");
//   }
//   if (!email) {
//     setEmailError(prev => prev = "Email required");
//   }
//   else if (!email.includes("@")) {
//     setEmailError(prev => prev = "Email must contain '@' ");
//   }
//   else if(email.endsWith('@') || email.startsWith('@')){
//     setEmailError(prev => prev = "Invalid Email");
//   }
//   else if(!email.match(validEmail)){
//     setEmailError(prev => prev = "Invalid Email Format")
//   }
//   else{
//     setEmailError(prev => prev = "");
//   }

//   if (!password) {
//     setPasswordError(prev => prev = "Password cannot be blank");
//   }
//   else if(password.length < 8){
//     setPasswordError(prev => prev = "Password must be 8 characters long");
//   }
//   else if(!password.match(validPwd)){
//     setPasswordError(prev => prev = "Include an uppercase, a special character & a number");
//   }
//   else{
//     setPasswordError(prev => prev = "");
//   }

//   if (!newPassword) {
//     setNewPasswordError(prev => prev = "Password cannot be blank");
//   }
//   else if(newPassword.length < 8){
//     setNewPasswordError(prev => prev = "Password must be 8 characters long");
//   }
//   else if(password !== newPassword){
//     setNewPasswordError(prev => prev = "Password did not match");
//   }
//   else{
//     setNewPasswordError(prev => prev = "");
//   }
  

//   if (emailError || passwordError || fNameError || lNameError || newPassword) {
//     setEmail(email);
//     setPassword(password);
//     setFName(fName);
//     setLName(lName);

//     return false;
//   }

//     const newEntry = {
//       email: email,
//       password: password,
//     }
//     setEntry([...entry, newEntry]);
//     setEmail("");
//     setPassword("");
//     console.log(entry);
  
//     return true;




// }

//     return(
//         <>
//     <section className={classes.contentStart}>
//       <div className={classes.image}>
//         <h2>Welcome</h2>
//         <img src="https://www.transparentpng.com/thumb/business/business-free-png-16.png" alt="" />
//       </div>
      
//       <div className={classes.outerContent}>
//       <form action="" onSubmit={handleSubmit}>
//         <div className={classes.innerContent}>
//         <div className={classes.user}> <FaSignInAlt /></div>
//         <div className={classes.heading}> Sign Up </div>
//         <div className={classes.name}>
//             <div className={classes.divBlock}>
//             <label htmlFor="fName"><FaUserTie /></label>
//             <input type="text" name="fName" value={fName} id="fName"
//             autoComplete="off" placeholder="First Name"
//               onChange={(e)=> setFName(e.target.value)} 
//             // required
//             />
//             <div style={{ fontSize: 14, color: "red" }}>
//               {fNameError}
//             </div>
//             </div>
//             <div className={classes.divBlock}>
//             <label htmlFor="lName"><FaUserTie /></label>
//             <input type="text" name="lName" value={lName} id="lName"
//             autoComplete="off" placeholder="Last Name"
//               onChange={(e)=> setLName(e.target.value)} 
//             // required
//             />
//             <div style={{ fontSize: 14, color: "red" }}>
//               {lNameError}
//             </div>
//             </div>
//         </div>
        
//         <div className={classes.divBlock}>
//           <label htmlFor="email"><FaEnvelope /></label>
//           <input type="text" name="email" value={email} id="email"
//           className={classes.email} autoComplete="off" placeholder="Email ID"
//           onChange={(e)=> setEmail(e.target.value)} 
//           // required
//           />
//           <div style={{ fontSize: 14, color: "red" }}>
//               {emailError}
//           </div>
//         </div>
        
//         {/* <div className={classes.password}> */}
//             <div className={classes.divBlock}>
//             <label htmlFor="password"><FaLock/></label>
//             <input type="text" name="password"value={password} id="password" 
//             className={classes.password} autoComplete="off" placeholder="Create a password"
//             onChange={(e)=> setPassword(e.target.value)} 
//             // required
//             />
//             <div style={{ fontSize: 14, color: "red" }}>
//               {passwordError}
//             </div>
//             </div>
//             <div className={classes.divBlock}>
//             <label htmlFor="newPassword"><FaLock/></label>
//             <input type="text" name="newPassword"value={newPassword} id="newPassword" 
//             autoComplete="off" placeholder="Confirm password"
//             className={classes.password} onChange={(e)=> setNewPassword(e.target.value)}
//             // required
//             />
//             <div style={{ fontSize: 14, color: "red" }}>
//               {newPasswordError}
//             </div>
//             </div>
//         {/* </div> */}
//         </div>
//         <div className={classes.downContent}>
//         <div className={classes.input}>
//         </div>
//         <NavLink to="/login">
//           <p className={classes.login}> Already a user? Login</p>
//         </NavLink>
//       </div>

//         <Button className={classes.btn} type="submit" variant="contained" color="primary">
//           Sign In
//         </Button>
//       </form>

//       </div>
      
//     </section>  
//         </>
//     )
// }

// export default SignUp;













