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
    <Box sx={{ display: 'flex', gap: '10px', marginLeft: '76%' }}>
      <Box sx={{ padding: '10px', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '350%', color: '#fff' }}>
          {String(timeLeft.hours).padStart(2, '0')}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '115%', color: '#fff', fontFamily: 'serif'}}>Hours</Typography>
      </Box>
      <Box sx={{ padding: '10px', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '350%', color: '#fff' }}>
          {String(timeLeft.minutes).padStart(2, '0')}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '115%', color: '#fff', fontFamily: 'serif'}}>Minutes</Typography>
      </Box>
      <Box sx={{ padding: '10px', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '350%', color: '#fff' }}>
          {String(timeLeft.seconds).padStart(2, '0')}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '115%', color: '#fff', fontFamily: 'serif'}}>Seconds</Typography>
      </Box>
    </Box>
  );
};

export default function NFTCard() {
  const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24; // Example: 24 hours from now

  return (
    <Stack sx={{backgroundColor: '#1a1a1a', padding: '4rem 0'}}>
    <Stack className='container'  sx={{ marginBottom: '-42px', borderRadius: '60px'}}>
    <Box sx={{ padding: '30px',height: '800px', backgroundColor: 'linear-gradient(to bottom right, #9c27b0, #673ab7)', borderRadius: '20px' }}>
      <Card sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        borderRadius: '12px',
        height: '800px',
        backgroundColor: '#2a2a2a', }}>
        <Box sx={{ flex: 1, height: '700px', marginTop: '117px', marginLeft: '45px' }}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8smTB2LVB3viYZTm3R269VoT4OOamAT_Tfw&s"
            alt="Magic Mashrooms" 
            style={{ width: '100%', height: '80%', objectFit: 'cover', borderRadius: '12px' }} 
          />
        </Box>
        <CardContent sx={{ 
            flex: 1, 
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center', 
            color: 'white', 
            marginLeft: '' }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 'bold', 
            marginBottom: '10px',
            marginLeft: '150px',
            fontSize: '40px',  
            fontFamily: 'serif', }}>
            Magic Mashrooms
          </Typography>
          
          <Button variant="contained" sx={{ 
            marginTop: '120px',  
            borderRadius: '30px', 
            width: '203px', 
            height: '60px',
            color: '#fff',
            fontSize: '16px'
             }}>
            See NFT
          </Button>
        </CardContent>
      </Card>
     
      <Stack>
        <Typography variant="body1" sx={{ marginTop: '-410px', marginLeft: '82%' ,color: 'white',fontSize: '25px', fontFamily: 'serif' }}>
            Auction ends in:
          </Typography> 
          <CountdownTimer targetDate={targetDate} />
        </Stack> 
        <Stack sx={{marginLeft: '53%', marginTop: '-33%'}}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '10px', 
            marginBottom: '10px',
             }}>
            <Avatar sx={{
                 width: 24,
                  height: 24 }} />
            <Typography variant="body1" sx={{color: "#fff" , fontSize: '25px', fontFamily: 'serif'}}>Shroomie</Typography>
          </Box>
          </Stack>
    </Box>
    </Stack>
    </Stack>
  );
}
