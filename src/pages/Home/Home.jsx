import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/actions";





const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  width: 400px;
  height: 400px;
  border: 2px black solid;
  border-radius: 10px;
  margin:auto;
`

const Container2 = styled.div`
  justify-content: center;
  height: 60%;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px;
  border-radius: 20px;
`;

const Button = styled.button`
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



export default function Home() {
  const user = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  const dataUser =
    user.google.profile !== undefined
      ? user.google
      : user.facebook.profile !== undefined && user.facebook;

  return (
        <>
          {dataUser.profile !== undefined && (
            <Container>
              <Container2>
                <Img src={dataUser.profile.imageUrl} />
              </Container2>
              <div>
                <h4>Nama : {dataUser.profile.name}</h4>
                <h4>Email : {dataUser.profile.email}</h4>
                <Button onClick={() => dispatch(logout(history))}>Logout</Button>
              </div>
              
            </Container>
          )}
        </>
  );
}
