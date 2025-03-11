import { Box, Button, Card, CardContent, Typography, Grid, Avatar, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

// Countdown component
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  
  useEffect(() => {
    const interval = setInterval(() => {
      const difference = targetDate - new Date();
      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <Box sx={{ padding: '10px', backgroundColor: '#fff', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {String(timeLeft.hours).padStart(2, '0')}
        </Typography>
        <Typography variant="body2">Hours</Typography>
      </Box>
      <Box sx={{ padding: '10px', backgroundColor: '#fff', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {String(timeLeft.minutes).padStart(2, '0')}
        </Typography>
        <Typography variant="body2">Minutes</Typography>
      </Box>
      <Box sx={{ padding: '10px', backgroundColor: '#fff', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {String(timeLeft.seconds).padStart(2, '0')}
        </Typography>
        <Typography variant="body2">Seconds</Typography>
      </Box>
    </Box>
  );
};

const NFTCard = () => {
  const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24; // Example: 24 hours from now

  return (
    <Stack sx={{backgroundColor: '#1a1a1a', marginTop: ''}}>
    <Stack className='container'>
    <Box sx={{ 
        padding: '30px',
         backgroundColor: 'linear-gradient(to bottom right, #9c27b0, #673ab7)',
          borderRadius: '12px',
          marginTop: '80px' }}>
      <Card sx={{ display: 'flex', flexDirection: 'row', borderRadius: '12px',
        width: '1280px',
        height: '620px'
       }}>
        <Box sx={{ flex: 1 }}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkERuefAjymKEYeFRNC9uWeN0YM0XOSJ3Ow&s" 
            alt="Magic Mashrooms" 
            style={{ width: '210%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} 
          />
        </Box>
        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '100px' }}>
            <Avatar sx={{ 
                width: 24,
                height: 24,
                marginLeft: '-90%' }} />
            <Typography variant="body1">Shroomie</Typography>
          </Box>
          <Typography variant="h4" component="h2" gutterBottom sx={{
              color: 'white', 
              fontWeight: 'bold', 
              marginBottom: '-2rem', 
              fontSize: '40px',
              fontFamily: 'serif',
              marginTop: '270px',
              marginLeft: '-90%'
              }}>
            Magic Mashrooms
          </Typography>
         
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            Auction ends in:
          </Typography>
          <CountdownTimer targetDate={targetDate} />
          <Button variant="contained" sx={{ marginTop: '20px', backgroundColor: '#fff', color: '#9c27b0', borderRadius: '30px' }}>
            See NFT
          </Button>
        </CardContent>
      </Card>
    </Box>
    </Stack>
    </Stack>
  );
}


export default NFTCard;