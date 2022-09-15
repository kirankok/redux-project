import { Card, CardContent, Chip, Container, CssBaseline, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomQuote } from '../../redux/actions/randomQuoteActions';

const RandomQuote = () => {

  const dispatch = useDispatch();

  const { isLoading, randomQuoteData, error } = useSelector(state => state.randomQuote);

  const { content, author, tags, dateModified } = randomQuoteData;

  useEffect(() => {
    dispatch(fetchRandomQuote())
  }, [])

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant='h4'>{author}</Typography>
          <Typography variant='h2'>{content}</Typography>
          <Typography variant='h6'>{dateModified}</Typography>
          {
            tags?.map((item, i) => <Chip key={i} label={item} />)
          }
        </CardContent>
      </Card>
    </Container>
  )
}

export default RandomQuote