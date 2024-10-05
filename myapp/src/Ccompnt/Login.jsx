import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <h1>Login Page</h1>
          <TextField label="Name" varient="outlined"></TextField>
          <br/>
          <TextField label="password" varient="outlined"></TextField>
          <br />
          <Button varient="outlined">submit</Button>

      </div>
  )
}

export default Login