import { Box, Button, Card, CardContent, Typography, Grid, Avatar, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { RiRobot2Line } from "react-icons/ri";
import { SiGooglechrome } from "react-icons/si";
import * as React from 'react';

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
    <Card sx={{
        width: '24%', 
        backgroundColor: '#2a2a2a',
         marginLeft: '73%',
          marginTop: '-206px', 
          height: '30%',
          borderRadius: '16px',
          border: '45px' }}>
    <Typography variant="body1" sx={{  
        marginLeft: '7%',
        fontSize: '18px', 
        fontFamily: 'serif',
        color: '#fff',
        marginTop: '13px'}}>
            Auction ends in:
          </Typography>
    <Box sx={{ display: 'flex', gap: '10px', marginLeft: '4%' }}>
      <Box sx={{ padding: '10px', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '350%', color: '#fff', marginTop: '-12px' }}>
          {String(timeLeft.hours).padStart(2, '0')}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '115%', color: '#fff', fontFamily: 'serif' , marginTop: '-12px'}}>Hours</Typography>
      </Box>
      <Box sx={{ padding: '10px', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '350%', color: '#fff', marginTop: '-12px' }}>
          {String(timeLeft.minutes).padStart(2, '0')}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '115%', color: '#fff', fontFamily: 'serif', marginTop: '-12px'}}>Minutes</Typography>
      </Box>
      <Box sx={{ padding: '10px', borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '350%', color: '#fff' , marginTop: '-12px'}}>
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
    <Stack className='container'  sx={{ marginBottom: '-40px', borderRadius: '60px'}}>
    <Box sx={{ padding: '30px',height: '800px', backgroundColor: 'linear-gradient(to bottom right, #9c27b0, #673ab7)', borderRadius: '20px', marginBottom: '13px' }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 'bold', 
            marginBottom: '13px',
            marginLeft: '-6px',
            fontSize: '40px',  
            fontFamily: 'serif',
            color: '#fff',
             }}>
            The Orbitians
          </Typography>
          <Typography variant="h3" sx={{
            color: '#9e7c7c', 
            fontWeight: 'bold',
             marginBottom: '46px', 
             fontFamily: 'serif', 
             fontSize: '25px',
             }}>
          Minted on Sep 30, 2022
          </Typography>
          <Typography variant="h3" sx={{
            color: '#9e7c7c', 
            fontWeight: 'bold',
             marginBottom: '17px', 
             fontFamily: 'serif', 
             fontSize: '25px'}}>
          Created By
          </Typography>
          <Typography variant="h3" sx={{color: '#fff'}}>
          <RiRobot2Line />
          </Typography>
          <Typography variant='h3' sx={{
            color: '#fff', 
            fontWeight: 'bold',
             marginBottom: '10px', 
             fontFamily: 'serif', 
             fontSize: '25px', 
             marginLeft: '35px',
             marginTop: '-29px'}}>
          Orbitian
          </Typography>
          
     
      <Stack className='container' sx={{ 
        marginLeft: '-9%' ,
        color: 'black',
        fontSize: '18px', 
        fontFamily: 'serif', 
        marginTop: '-42px' }}> 
          <CountdownTimer targetDate={targetDate}  />
        </Stack> 
    </Box>
    <Stack className='container'>
        <Box sx={{ marginTop: '-460px'}}>
             <Typography variant='h3' sx={{
            color: '#9e7c7c', 
            fontWeight: 'bold',
             marginBottom: '10px', 
             fontFamily: 'serif', 
             fontSize: '25px', 
             marginLeft: '35px',
             marginTop: '-80px'}}>
          Description
          </Typography>
          <Typography sx={{
            color: '#9e7c7c',
            fontWeight: 'bold',
             marginBottom: '10px', 
             fontFamily: 'serif', 
             fontSize: '20px', 
             marginLeft: '35px',
          }}>
            The Orbitians
            is a collection of 10,000 unique NFTs on the Ethereum <br/>blockchain,
              There are all sorts of beings in the NFT Universe.<br />
            The most advanced and friendly of the bunch are Orbitians.   They live in a metal space machines, <br/>high up in the sky and only have one foot on Earth.
            These Orbitians are a peaceful race, <br/>but they have been at war with a group of invaders for many generations.<br /> 
            The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, <br/>yet do not know any other way to be.<br/> 
            Upside-Downs believe that they will be able to win this war if they could only <br/>get an eye into Orbitian territory,  so they've taken to make human beings their target.
          </Typography>
        </Box>
    </Stack>
    <Stack>
        <Box sx={{ marginTop: '-165px'}}>
          <Typography variant='h3' sx={{
            color: '#9e7c7c', 
            fontWeight: 'bold',
             marginBottom: '23px', 
             fontFamily: 'serif', 
             fontSize: '25px', 
             marginLeft: '36px',
             marginTop: '-29px'}}>
          Orbitian
          </Typography>
          <Typography variant="h3" sx={{color: '#fff', marginLeft: '40px'}}>
          <SiGooglechrome />
          </Typography>
          <Typography variant='h3' sx={{
            color: '#9e7c7c', 
            fontWeight: 'bold',
             marginBottom: '10px', 
             fontFamily: 'serif', 
             fontSize: '25px', 
             marginLeft: '70px',
             marginTop: '-29px'}}>
          View on Etherscan
          </Typography>
          <Typography variant="h3" sx={{color: '#fff', marginLeft: '40px'}}>
          <SiGooglechrome />
          </Typography>
          <Typography variant='h3' sx={{
            color: '#9e7c7c', 
            fontWeight: 'bold',
             marginBottom: '10px', 
             fontFamily: 'serif', 
             fontSize: '25px', 
             marginLeft: '70px',
             marginTop: '-29px'}}>
          View Original
          </Typography>
        </Box>
    </Stack>
    <Stack>
        <Box sx={{marginTop: '-12px'}}>
        <Typography variant='h3' sx={{
            color: '#9e7c7c', 
            fontWeight: 'bold',
             marginBottom: '28px', 
             fontFamily: 'serif', 
             fontSize: '25px', 
             marginLeft: '36px',
             marginTop: '-29px'}}>
           Tags
          </Typography>
        </Box>
    </Stack>
    <Stack direction="row" spacing={2} sx={{marginLeft: '39px', marginBottom: '12px'}}>
      <Button variant="contained" sx={{
        width: '160px', 
        height: '50px',  
        borderRadius: '20px', 
        color: '#fff',
        fontSize: '16px'}}>Contained</Button>
      <Button variant="contained" sx={{
        width: '160px',
        height: '50px', 
        borderRadius: '20px', 
        color: '#fff',
        fontSize: '16px'}}>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons"sx={{
        width: '90px', 
        height: '50px',  
        borderRadius: '20px', 
        color: '#fff',
        fontSize: '16px'}}>
        Link
      </Button>
      <Button variant="contained" href="#contained-buttons" sx={{
        width: '90px', 
        height: '50px',  
        borderRadius: '20px', 
        color: '#fff',
        fontSize: '16px'}}>
        Link
      </Button>
    </Stack>
    </Stack>
    </Stack>
  );
}