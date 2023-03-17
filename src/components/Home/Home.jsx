import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            // justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
        <Grid item xs={3} >
        <Typography variant="h3" component="h3">
            View Projects
        </Typography>
        <Box>
        <Button><Link to={'/contact-app'} style={{color:'blue',textDecoration:'none'}}>Contact App</Link></Button>
        <Button><Link to={'/register'} style={{color:'blue',textDecoration:'none'}}>Register Form</Link></Button>
        </Box>
        </Grid>   
        </Grid> 
    </div>
  )
}
