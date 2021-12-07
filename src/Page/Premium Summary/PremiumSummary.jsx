import React from "react";
import { useHistory } from "react-router";
import classes from "./premium.module.css";

const PremiumSummary = () => {

    const history = useHistory();
    
    return(
        <>
        <section className={classes.contentStart}>
            <h2>Know more about Premium</h2>
            <div className={classes.middleContent}>
                <img src="https://milbinsure.com/Content/images/New%20Feb-01.png" alt="Loading..." />
                <div className={classes.relatedContent}>
                    <p>
                    AASAAN PREMIUM is well known for Business Insurance. We are looking forward to provide insurance on other fields in the coming days.
                    For now you can enjoy our service on your individual properties. Select CPI(Commercial Property Insurance) in the list and you can know your premium amount of your desired product. 
                    You can easily get your computers, laptops, mobiles, tablets, car and bike insured from us. 
                    </p>
                    <p>
                    <strong>What Is Commercial Property Insurance?</strong> <br />
                    Commercial property insurance is used to cover any commercial property.
                    Commercial property insurance protects commercial property from such perils as fire, theft, and natural disaster.
                    However AASAAN PREMIUM will provide you coverage against fire and theft on your property :)
                    </p>
                    <p>
                        <strong>Factors</strong> on which your premium depends can be your product's date of purchase, current market price, make and model.
                        Premium also depends on your personal information i.e., age, gender , marital status, occupation and residence. 
                    </p>
                </div>
            </div>

            <button className={classes.backBtn} onClick={() => history.goBack()}>🔙</button>
            
        </section>        
        </>
    )
}

export default PremiumSummary;