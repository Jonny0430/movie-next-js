import React, { useState } from 'react';
import { Paper, Box, Card, CardContent, Typography, Tabs, Tab, Grid, Stack, Fab } from '@mui/material';
import BadgeAvatars from '../property/Avatar';
import NavigationIcon from '@mui/icons-material/Navigation';


const tabData = [
  { 
    cars: [
      { title: 'Distant Galaxy', titles: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://media.istockphoto.com/id/1461166696/photo/a-lake-in-winter-on-which-stands-a-rock-with-two-trees-during-a-sunset.jpg?s=612x612&w=is&k=20&c=ia8LnFQJQR58xEH1-9Y8WTpUcRk0u6frgWnPWGnn0OE=' },
      { title: 'Distant Galaxy', titles: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://www.ozenduvarkagidi.com.tr/images/urunler/3D-Boyutlu-Magara-Deniz-Manzarasi-resim-11012.jpg' },
      { title: 'Distant Galaxy', titles: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://st2.depositphotos.com/6379634/9208/i/450/depositphotos_92089112-stock-photo-landscape-in-the-sierra-nevada.jpg' },
      { title: 'Distant Galaxy', titles: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://media.istockphoto.com/id/1461166696/photo/a-lake-in-winter-on-which-stands-a-rock-with-two-trees-during-a-sunset.jpg?s=612x612&w=is&k=20&c=ia8LnFQJQR58xEH1-9Y8WTpUcRk0u6frgWnPWGnn0OE=' },
      { title: 'Distant Galaxy', titles: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://www.ozenduvarkagidi.com.tr/images/urunler/3D-Boyutlu-Magara-Deniz-Manzarasi-resim-11012.jpg' },
      { title: 'Distant Galaxy', titles: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://st2.depositphotos.com/6379634/9208/i/450/depositphotos_92089112-stock-photo-landscape-in-the-sierra-nevada.jpg' },
    ]
  },
];

export default function Artist() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <>
    <Stack sx={{backgroundColor: '#1a1a1a'}}>
        <Stack className='container'>
            <Box>
            <Typography variant="h4" component="h2" gutterBottom sx={{
              color: 'white', 
              fontWeight: 'bold', 
              marginBottom: '-2rem', 
              fontSize: '40px',
              fontFamily: 'serif',
              marginTop: '80px'
            }}>
        More from this artist
      </Typography> 
      <Stack sx={{marginLeft: '79%'}}>
      <Box sx={{ '& > :not(style)': { m: 1, marginTop: '-12px' } }}>
      <Fab variant="extended" sx={{ 
        width: '247px', 
        height: '50px', 
        border: '2px', 
        borderRadius:'20px',
        fontSize: '19px',
        fontFamily: 'serif',
        fontWeight: 'bold', 
        marginTop: ']-12px'
         }} >
        <NavigationIcon sx={{ height: '20px', width: '20px',  }} />
        Go To Artist Page
      </Fab>
      </Box>
      </Stack>
    </Box>
        <Paper sx={{ padding: '2rem', backgroundColor: '#1a1a1a', border: '23%', marginBottom: '29px'}}>
            
            {/* Content based on selected tab */}
            <Box sx={{ marginTop: '1rem', marginBottom: '92px' }}>
                <Grid container spacing={0}>
                {tabData[tabIndex].cars.map((card, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                    <Card sx={{ 
                        backgroundColor: '#2a2a2a', 
                        borderRadius: '12px', 
                        height: '90%', 
                        width: '83%', 
                        marginBottom: '140px'}}>
                        <img
                        src={card.imageUrl}
                        style={{
                            width: '100%',
                            height: '62%',
                            borderRadius: '12px 12px 0 0',
                            objectFit: 'cover',
                        }}
                        />
                        <CardContent>

                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', marginLeft: '12px',  fontSize: '23px',fontFamily: 'serif'}}>
                            {card.title}
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', marginLeft: '47px', marginTop: '17px', fontSize: '17px' }}>
                            {card.titles}
                        </Typography>
                       
                        <Stack sx={{display: 'flex', marginTop: '29px'}}>
                        <Typography sx={{ color: 'gray', fontSize: '14px' }}>Price:</Typography>
                        <Typography sx={{ color: '#fff', fontSize: '18px',fontFamily: 'serif'  }}>{card.price}</Typography>
                        </Stack>
                        <Typography sx={{ color: 'gray', fontSize: '14px', marginLeft: '233px', marginTop: '-47px' }}>Highest Bid:</Typography>
                        <Typography sx={{ color: '#fff', marginLeft: '220px', marginBottom: '12px', fontSize: '18px',fontFamily: 'serif'  }}>{card.highestBid}</Typography>
                        <Stack>
                            <BadgeAvatars  />
                        </Stack>
                        </CardContent>
                    </Card>
                    </Grid> 
                   
                ))}
                </Grid>
            </Box>
            </Paper>
        </Stack>
    </Stack>
   
    </>
  );
}
