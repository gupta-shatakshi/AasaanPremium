import React, { useState } from "react";
import classes from './contact.module.css';
import {FaEnvelope, FaEnvelopeOpen, FaStickyNote, FaUser} from "react-icons/fa";
import Button from '@mui/material/Button';

const Contact = () => {

    const [data, setData] = useState({
        fname: '',
        email: '',
        subject: '', 
        message: '',
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;
        setData((prev) => {
            return{
                ...prev, [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Hey! This is ${data.fname}. My email address is ${data.email}. My query is regarding ${data.subject}. ${data.message} `);
    }

    return(
        <>
            <section className={classes.contentStart}>

            <div className={classes.description}>
            <img src="https://www.sew.ai/images/contact/contact-banner.svg" alt="Loading..." />
            <br />
            <div>
                Your questions and comments are important to us. <br />
                Email us with any doubts or inquiries. <br />
                We would be more than happy to help and connect with you anytime.
            </div>
           
            </div>

            <div className={classes.outerContent}>
            <form action="" onSubmit={(e) => formSubmit(e)}>
                <div className={classes.innerContent}>
                <div className={classes.divBlock}>
                    <div className={classes.user}><FaEnvelopeOpen /></div>
                    <div className={classes.heading}> CONTACT </div>
                </div>
                <div className={classes.divBlock}>
                    <label htmlFor="fname"><FaUser/></label>
                    <input type="text" id="fname" 
                    autoComplete="off" name="fname" value = {data.fname}
                    onChange={inputEvent} placeholder="Enter Name"
                    required />
                </div>
               
                <div className={classes.divBlock}>
                <label htmlFor="email"><FaEnvelope/></label>
                <input type="email" id="email" 
                autoComplete="off" name="email" value = {data.email}
                onChange={inputEvent} placeholder="Email ID"
                required />
                </div>

                <div className={classes.divBlock}>
                <label htmlFor="subject"><FaStickyNote/></label>
                <input type="text" id="subject" 
                autoComplete="off" name="subject" value = {data.subject}
                onChange={inputEvent} placeholder="Enter Subject"
                required />
                </div>

                <div className={classes.divBlock}>
                <textarea id="message" 
                autoComplete="off" name="message" value = {data.message}
                onChange={inputEvent} placeholder="Enter message (Optional)"
                rows={3} cols={5} required />
                </div>

                </div>

                <Button className={classes.btn} type="submit" 
                variant="contained" color="primary" >
                Send Email
                </Button>
            </form>

            </div>
      
    </section>  
        </>
    )
}

export default Contact;