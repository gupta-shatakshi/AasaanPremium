import React from "react";
// import {FaHome, FaTwitter, FaFacebook, FaYoutube, FaLinkedinIn, FaInstagram, FaMailBulk, FaPhone} from "react-icons/fa";
import classes from './footer.module.css'
import fb from '../icons/fb.png';
import insta from '../icons/insta.png';
import linkedin from '../icons/linkedin.png';
import twitter from '../icons/twitter.png';
import youtube from '../icons/youtube.png';

const Footer = () => {
    return(
        <>
            {/* <div className="logo">
                <div className="logo_list">
                <ul>
                    <li><a href="https://www.facebook.com/" target="_blank"><FaFacebook/></a></li>
                    <li><a href="https://twitter.com/?lang=en" target="_blank"><FaTwitter/></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank"><FaYoutube/></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank"><FaLinkedinIn/></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a></li>
                </ul>
                </div>
                
                <ol>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                </ol>  
            </div>
            <div className="details">
                <p>
                    <strong><FaMailBulk /> Email:</strong>
                    <a href="mailto: abcd123@businessinsurance.com">{` abcd123@businessinsurance.com`}</a>
                </p>
                <p><strong><FaPhone />Phone:</strong>{` 826-555-7854`}</p>
                <p><strong><FaHome />Address:</strong>{` 645 46th St, Canada, 23452`}</p>
            </div> */}

		<div className={classes.footer}>
            <div className={classes.logo_ctn}>
                <a href = "https://www.facebook.com/" target = "_blank">
                    <img src={fb} alt=''></img>
                </a>
                
                <a href = "https://www.instagram.com/" target = "_blank">
                    <img src={insta} alt=''></img>
                </a>
                <a href = "https://www.linkedin.com/signup" target = "_blank">
                    <img src={linkedin} alt=''></img>
                </a>
                <a href = "https://twitter.com/?lang=en" target = "_blank">
                    <img src={twitter} alt=''></img>
                </a>
                <a href = "https://youtube.com/" target = "_blank">
                    <img src={youtube} alt=''></img>
                </a>
            </div>

            <div className={classes.contact_ctn}>
                <h2> Get In Touch</h2>
                <h1>Email: guptashatakshi30@gmail.com</h1>
                <h1>Contact: 777-555-2222</h1>
                <h1>Address: U.P. INDIA</h1>
            </div>
        </div>


        </>
    )
}

export default Footer;