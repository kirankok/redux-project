import React from 'react'
import { Card, CardMedia, Typography, CardContent } from '@mui/material';

const ProductCard = ({ title, image, price }) => {
  return (
    <Card sx={{ flexDirection: 'column' }}>
      <CardMedia component="img" height="194" image={image} alt={title}></CardMedia>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant='h5' sx={{ fontSize: 16 }}>{title}</Typography>
        <Typography variant='h6' sx={{ fontSize: 12 }}>{price}</Typography>
      </CardContent>
    </Card>
  )
}

export default ProductCard