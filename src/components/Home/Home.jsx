import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Typography variant="h3" component="h3">
            View Projects
          </Typography>
          <Box sx={{ mt: 2}}>
            <Button component={Link} to="/contact-app" sx={{ mr: 1 }}>
              Contact App
            </Button>
            <Button component={Link} to="/register">
              Register Form
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}
