import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
import { Switch,Route, Router } from "react-router";
import Services from "../src/Page/Services/Services";
// import Registration from "../src/Page/Registration";
import Error from "../src/Page/Error";
import Contact from "../src/Page/Contact/Contact";
import About from "../src/Page/About/About";
import Home from "../src/Page/Home/Home";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import ForgotPassword from "./Login/ForgotPassword";
import icon from './icon.jpg';
import PremiumSummary from "./Page/Premium Summary/PremiumSummary";

const Main = () =>{
    document.title="AASAAN PREMIUM"; 
    document.icon = {icon};
    return(
        <>
        <div className="container">
            <div className="content">
            <div className="navbar">
                <span>
                    <Navbar />
                    
                    <Switch>
                        {/* <Route component={Home}></Route> */}

                        <Route exact path = "/" component={Home}></Route>
                        <Route path = "/about" component={About}></Route>
                        <Route path = "/services" component={Services}></Route>
                        {/* <Route path = "/registration" component={Registration}></Route> */}
                        <Route path = "/contact" component={Contact}></Route>
                        <Route path = "/login" component={Login}></Route>
                        <Route path = "/signup" component={SignUp}></Route>
                        <Route path = "/forgotPassword" component={ForgotPassword}></Route>
                        <Route path = "/premiumSummary" component={PremiumSummary}></Route>
                        <Route component={Error}></Route>
                        
                    </Switch>
                </span>
            </div>


            </div>
            
            
        <footer className="footer">
            <Footer />
        </footer>    
            
        </div>        
        </>
    )
}

export default Main;