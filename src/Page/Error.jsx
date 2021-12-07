import React from "react";
import { useHistory } from "react-router";

const Error = () => {

    const history = useHistory();

    return(

        <>
        <section className="contentStart">
            <div className="error">
                <h1>Error 404 ☹️</h1> <br />
                <button onClick={() => history.goBack()}>🔙</button>
            </div>
            
        </section>
        </>
    )
}

export default Error;