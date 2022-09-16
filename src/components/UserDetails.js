import { CardContent, Card, Typography, Grid, CardMedia, Chip, Stack, Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { fetchUserDetails } from '../redux/actions/userDetailsActions';

const UserDetails = () => {

  const dispatch = useDispatch();

  let location = useParams();
  const history = useHistory();

  console.log(location)

  const { isLoading, userDetailsData, error } = useSelector(state => state.userDetails);

  const url = 'https://randomuser.me/api/?results=500';

  useEffect(() => {
    dispatch(fetchUserDetails(url))
  }, [])

  const handleClick = (gender) => {
    const genderUrl = `${url}&gender=${gender}`;
    dispatch(fetchUserDetails(genderUrl))
  }

  const showCard = (userData) => {

    return userData?.map((item, i) => {

      return (
        <Grid item key={i}>
          <Card>
            <CardContent>
              <CardMedia component="img" image={item.picture.medium}></CardMedia>
              <Typography>{item.name.first}</Typography>
              <Typography>{item.gender}</Typography>
            </CardContent>
          </Card>
        </Grid>
      )
    })
  }

  return (
    <Container>
      <Button onClick={history.goBack} variant='outlined'>Back</Button>
      <div>
        <Stack direction="row" spacing={1}>
          <Chip label="Male" onClick={() => handleClick('male')} />
          <Chip label="Female" variant="outlined" onClick={() => handleClick('female')} />
        </Stack>
      </div>
      <Grid container spacing={2}>
        {showCard(userDetailsData?.results)}
      </Grid>
    </Container>
  )
}

export default UserDetails