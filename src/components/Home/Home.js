import React from 'react';
import Button from '@mui/material/Button';
import Header from '../Header/Header';

const Home = () => {

  const handleLogin = () => {
    window.location = `${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  }

  return (
    <div className="login">
      <Header />
      <Button variant="contained" onClick={handleLogin}> Login to spotify</Button>
    </div>
  );
};

export default Home;

