import React from "react";
import { Facebook, Google } from "../../components";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const ButtonGroup = styled.div`
  display: flex;
`;

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <Google />
      <Facebook />
    </div>
  );
}

export default Login;
