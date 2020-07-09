import React,{useState} from "react";
import { FacebookProvider, Login } from "react-facebook";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { useDispatch} from 'react-redux'
import {getFacebook} from '../../redux/actions'


const BtnFacebook = styled.button`
width: 180px;
height:40px;  
border-radius: 4px;
background: #3b5998;
color:white;
border:0px transparent;  
text-align: center;
margin:5px;
display: inline-block;

&:hover{
    background: #3b5998;
    opacity: 0.6;
}`




export default function Facebook() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const handleResponse = (data) => {
        dispatch(getFacebook(data, history));
    };

    const handleError = (error) => {
        console.log(errors);

        setErrors({ error });
    };

   

    return (
        <FacebookProvider appId="276763010319212">
            <Login
                scope="email"
                onCompleted={handleResponse}
                onError={handleError}
            >
                {({ loading, handleClick, error, data }) => (
                    <BtnFacebook onClick={handleClick}>
                        Login via Facebook
                        {loading && <span>Loading...</span>}
                    </BtnFacebook>
                )}
            </Login>
        </FacebookProvider>
    );
}