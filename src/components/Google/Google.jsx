import React from 'react'
import { GoogleLogin } from "react-google-login";
import {getGoogle} from '../../redux/actions'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";



function Google() {
   
    const history = useHistory();
    const dispatch = useDispatch();
    const responseGoogle = (response) => {
        dispatch(getGoogle(response, history));
    };
    
  
    
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
