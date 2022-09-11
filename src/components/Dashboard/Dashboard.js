import React from 'react';
import { Container, Typography } from '@mui/material';
import CardContainer from '../CardContainer/CardContainer';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant='h6'>BIGGEST DEALS ON TOP BRANDS</Typography>
      <CardContainer />
    </Container>
  )
}

export default Dashboard