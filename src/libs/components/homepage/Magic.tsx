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
    <Stack className='container'>
    <Box sx={{ display: 'flex', gap: '20px',  marginBottom: '180px' }}>
      <Box sx={{ padding: '10px', backgroundColor: '#ffffff54', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color:  '#fff',  marginLeft: '12px', fontSize: '142%'}}>
          {String(timeLeft.hours).padStart(2, '0')}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color:  '#fff'}}>Hours</Typography>
      </Box>
      <Box sx={{ padding: '10px', backgroundColor: '#ffffff54', borderRadius: '4px' }}>
        <Typography variant="h6"sx={{ fontWeight: 'bold', color:  '#fff', marginLeft: '18px' , fontSize: '142%'}}>
          {String(timeLeft.minutes).padStart(2, '0')}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color:  '#fff' }}>Minutes</Typography>
      </Box>
      <Box sx={{ padding: '10px', backgroundColor: '#ffffff54', borderRadius: '4px'  }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color:  '#fff' , marginLeft: '18px' , fontSize: '142%'}}>
          {String(timeLeft.seconds).padStart(2, '0')}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color:  '#fff'}}>Seconds</Typography>
      </Box>
    </Box>
    </Stack>
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
              marginBottom: '1rem', 
              fontSize: '40px',
              fontFamily: 'serif',
              marginTop: '270px',
              marginLeft: '-90%'
              }}>
            Magic Mashrooms
          </Typography>
          <Button variant="contained" sx={{ 
            marginTop: 'px',
            backgroundColor: '#fff', 
            color: '#9c27b0', 
            borderRadius: '30px',
            marginLeft: '-80%',
            width: '28%',
            height: '50px',
            marginBottom: '8px' }}>
            See NFT
          </Button>
        </CardContent>
      </Card>
    </Box>
    <Stack>
    <Stack sx={{
             width: '50%',
              marginLeft: '69%',
               height: '69%',
               marginTop: '-220px'
               }}> 
        <Typography variant="body1" sx={{ marginBottom: '20px', marginLeft: '1%', color: '#fff' }}>
            Auction ends in:
        </Typography>
          <CountdownTimer  targetDate={targetDate} />
          </Stack>
          </Stack>
    </Stack>
    </Stack>
  );
}


export default NFTCard;