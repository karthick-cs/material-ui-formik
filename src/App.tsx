import React from 'react';
import {Stack} from "@mui/material";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" height="100vh">
       <LoginForm/>
    </Stack>
  );
}

export default App;
