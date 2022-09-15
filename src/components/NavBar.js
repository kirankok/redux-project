import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material'

const NavBar = () => {
  return (
    <Container sx={{ mb: '100px' }}>
      <AppBar >
        <Toolbar>
          <Typography>Quotes</Typography>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default NavBar