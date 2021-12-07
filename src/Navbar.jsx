import React from "react";
import {FaHome, FaUser, FaAddressBook, FaBookReader,FaUserFriends, FaHandshake} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import icon from './icon.jpg'

const Navbar = () => {
    return(
        <>
         
            <nav>
            <ul>
            <span className="icon">
                <img src={icon} alt="logo" />
            </span>
         
        
                <NavLink to="/">
                    <li><FaHome />  HOME </li>
                </NavLink>
                
                <NavLink to="/about"> 
                    <li><FaUser />  ABOUT US
                    <div className="submenu_1">
                        <ul>
                        <li>Mission</li>
                        <li>Vision</li>
                        <li>FAQ ?</li>
                        </ul>
                    </div>          
                    </li>
                </NavLink>

                {/* <NavLink to="/services">
                    <li><FaHandshake/>  SERVICES</li>
                </NavLink>
                 */}
           

                <NavLink to="/contact"> 
                    <li><FaAddressBook/>  CONTACT</li>
                </NavLink>

                <NavLink to="/premiumSummary">
                    <li className="premiumClass"><FaBookReader/>  PREMIUM SUMMARY
                        {/* <div className="submenu_2">
                            <ul>
                                <li>Register Now</li>
                                <li>Edit Application</li>
                                <li>How to Register</li>
                            </ul>
                        </div> */}
                    </li>
                </NavLink>

                 <NavLink to="/error">
               
                </NavLink>
            </ul>
                    
            <div className="login_box">
                {/* <input type="text" placeholder="Search anything..."/> */}
                <NavLink to="/login"><button>Login</button></NavLink>
                <NavLink to="/signup"><button>Sign Up</button></NavLink>
            </div>           

            </nav>    
        
        </>
    )
}

export default Navbar;