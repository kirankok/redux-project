import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/actions/productsActions';
import { CircularProgress, Box, Container, Alert, Grid } from '@mui/material';
import Card from '../Card/Card';

function Spinner() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

const CardContainer = () => {

  const dispatch = useDispatch();
  const { isLoading, productData, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const showCard = (data) => {
    return data.map((item, i) => <Grid key={i} item xs={3}><Card  {...item} /> </Grid>)
  }

  return (
    <Container>
      {isLoading && <Spinner />}
      <Grid container spacing={3}>
        {productData?.length > 0 && showCard(productData)}
      </Grid>

      {error && <Alert severity="error">{error}</Alert>}
    </Container>
  )
}

export default CardContainer