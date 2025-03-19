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
    <Card sx={{width: '24%', backgroundColor: '#1a1a1a', marginLeft: '73%', marginTop: '-118px', height: '30%', }}>
    <Box sx={{ display: 'flex', gap: '10px', marginLeft: '4%' }}>
      <Box sx={{ padding: '10px', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '350%', color: 'black', marginTop: '-12px' }}>
          {String(timeLeft.hours).padStart(2, '0')}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '115%', color: '#fff', fontFamily: 'serif' , marginTop: '-12px'}}>Hours</Typography>
      </Box>
      <Box sx={{ padding: '10px', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '350%', color: 'black', marginTop: '-12px' }}>
          {String(timeLeft.minutes).padStart(2, '0')}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '115%', color: '#fff', fontFamily: 'serif', marginTop: '-12px'}}>Minutes</Typography>
      </Box>
      <Box sx={{ padding: '10px', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '350%', color: 'black' , marginTop: '-12px'}}>
          {String(timeLeft.seconds).padStart(2, '0')}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '115%', color: '#fff', fontFamily: 'serif', marginTop: '-12px'}}>Seconds</Typography>
      </Box>
    </Box>
    <Stack sx={{marginBottom: '22px', marginLeft: '50px', }}>
    <Button sx={{
        color: 'black', 
        marginLeft: '5%', 
        marginTop: '38px', 
        backgroundColor: '#fff',
        height: '50px',
        width: '75%',
        borderRadius: '20px'}}>
        Hello
    </Button>
    </Stack>
    </Card>
    </Stack>
  );
};

export default function Orbitians() {
  const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24; // Example: 24 hours from now

  return (
    <Stack sx={{backgroundColor: '#1a1a1a', padding: '4rem 0'}}>
    <Stack className='container'  sx={{ marginBottom: '-42px', borderRadius: '60px'}}>
    <Box sx={{ padding: '30px',height: '800px', backgroundColor: 'linear-gradient(to bottom right, #9c27b0, #673ab7)', borderRadius: '20px' }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 'bold', 
            marginBottom: '10px',
            marginLeft: '150px',
            fontSize: '40px',  
            fontFamily: 'serif',
            color: '#fff' }}>
            Magic Mashrooms
          </Typography>

          <Typography variant="h3">
          Created By
          </Typography>
     
      <Stack className='container' sx={{ 
        marginLeft: '-9%' ,
        color: 'black',
        fontSize: '18px', 
        fontFamily: 'serif', 
        marginTop: '-42px' }}> 
        
          <CountdownTimer targetDate={targetDate}  />
        </Stack> 
        <Stack sx={{color: 'black',
        fontSize: '18px', 
        fontFamily: 'serif', 
        marginTop: '-264px' }}>
         <Typography variant="body1" sx={{  marginLeft: '78%'}}>
            Auction ends in:
          </Typography>
        </Stack>
    </Box>
    </Stack>
    </Stack>
  );
}
