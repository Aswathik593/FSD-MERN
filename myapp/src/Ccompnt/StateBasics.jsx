import { Button, TextField, Typography } from '@mui/material'

import React, { useState } from 'react'

const Statebasics = () => {
    var [name, Setname] = useState("");
    const [inputvalue, Setinputvalue] = useState("");
    
    const Handleinput = (e) => {
        
        Setinputvalue(e.target.value)
    };
    const handleButtonClick = () => {
        Setname(inputvalue)
    };
    return (
        <div>
            <Typography variant='h5'>WELCOME {name}</Typography>
            <TextField variant='outlined' onChange={Handleinput} />
            <br/>
            <Button variant='outlined' onClick={handleButtonClick}>submit</Button>

        </div>
    );
};

export default Statebasics