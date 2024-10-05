import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">My_app</Typography>
                    <Link to='/log'>
                     <Button variant='contained' color='error'>login</Button>   
                    </Link> &nbsp;
                    <Link to='/signup'>
                        <Button variant='contained' color='success'>signup</Button>
                    </Link> &nbsp;
                    <Link to='/s'>
                        <Button variant='contained' color='secondary'>state</Button>
                    </Link> &nbsp;
                    <Link to='/counter'>
                        <Button variant='contained' color='warning'>counter</Button>
                    </Link> &nbsp;
                    <Link to='/name'>
                        <Button variant='contained' color='success'>name</Button>
                    </Link> &nbsp;
                    <Link to='/api'>
                        <Button variant='contained' color='error'>api</Button>
                    </Link> &nbsp;
                    <Link to='/pokemon'>
                        <Button variant='contained' color='secondary'>pokemon</Button>
                    </Link> &nbsp;
                    
                   

                </Toolbar>
            </AppBar>
            <br/><br/>
        </div>
    )
}

export default Navbar