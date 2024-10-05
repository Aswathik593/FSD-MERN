import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Sign up Page</h1>
      <TextField label="Name" varient="outlined"></TextField><br />
      <TextField label="Age" varient="outlined"></TextField><br />
      <TextField label="Address" varient="outlined"></TextField><br />
      <TextField label="password" varient="outlined"></TextField><br />
      <Button varient="outlined">submit</Button>
    </div>
  )
}

export default Signup