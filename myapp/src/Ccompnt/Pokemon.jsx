import React, { useState } from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import { Grid } from '@mui/material';
import axios from 'axios';


const Pokemon = () => {

    var [poke, Setpoke] = useState([]);

    axios.get("http://dummyapi.online/api/pokemon")
        .then(response => {
            console.log(response.data)
            Setpoke(response.data)
    
        })
        
    return (
        <div>
            <Grid container spacing={2}>
                {poke.map((val) => {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                        
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={val.image_url}
                                 
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                  
                                </CardContent>
              
                            </Card>
                        </Grid>

    
                    )
                })}
            </Grid>
        </div>
    )
}

export default Pokemon