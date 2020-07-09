import React from 'react'
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

function Google() {
    const history = useHistory();
    const responseGoogle = (response) => {
        if (response !== null) {
            history.push("/home");
        }
    }


    return (
        <div>
            <GoogleLogin 
            clientId="906985987698-kntbrf06p25drijcr7dmc400qqj48cm4.apps.googleusercontent.com"
            buttonText="Login With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}/>
        </div>
    )
}

export default Google
