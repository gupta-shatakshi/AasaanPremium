import React, { useState } from "react";
import classes from './About.module.css';
import Faq from "./Faq";
const About = () => {


    return(
        <>
        <section className={classes.contentStart}>
            <div className={classes.innerContent}>
                <h1>Our Mission</h1>
                <hr />
                <div className={classes.mision}>
                    
                    {/* <img src="https://www.metaoption.com/wp-content/themes/metaoption/images/Our-Vision.jpg" alt="Loading..." /> */}
                    <p><strong>MISSION OF AASAAN PREMIUM</strong> IS TO BECOME  THE MOST ADMIRED AND TRUSTED UPON INSURANCE COMPANIES IN INDIA, 
                        BY KEEPING UP WITH ALL THE PROMISES THAT WE MAKE TO OUR CUSTOMERS, 
                        BY PROVIDING THE MOST CONVINIENT DEALING PROCESS,
                        CREATING SUSTAINABLE VALUES, 
                        AND EMPOWERING ALL OUR EMPLOYESS.</p>
                    {/* <img src="https://www.greendale-is.in/images/vision-icon.png" alt="mission" /> */}
                    <img src="http://enterprisingskillset.com/sites/default/files/2020-03/ourmission.png" alt="Mission" />
                </div>
                <br />
                <h1>Our Vision</h1>
                <hr />
                <div className={classes.vision}>
                    {/* <img src="https://freepngimg.com/thumb/vision/5-2-vision-png-clipart.png" alt="vision" /> */}
                    <img src="https://t4.ftcdn.net/jpg/00/71/96/35/240_F_71963576_uCxAoxsQ8idrTYtR07blX2YMtm4ZrGHb.jpg" alt="Vision" />
                    <p><strong>OUR VISION</strong> IS TO SET THE STANDARD OF EXCELLENCE AMONG INSURANCE PROVIDERS BY BEING INNOVATIVE,
                        BEING FLEXIBLE AND CUSTOMER ORIENTED, 
                        BEING FINANCIALLY STRONG, PROVIDING THE RIGHT SUPPORT AND SERVICES FOR OUR CUSTOMERS,
                        EXCEEDING THEIR EXPECTATIONS.
                        WE, AT AASAAN PREMIUM, WILL ATTRACT AND RETAIN THE VERY BEST EMPLOYEES AND AGENTS TO HELP US ACHIEVE THIS GOAL.
                    </p>
                </div>
                    <br />
                    <h1>FAQs ?</h1>
                    <hr />
                <div>
                    <Faq />
                </div>
            
            </div>
        </section>
              
        </>
    )
}

export default About;