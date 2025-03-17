import React, { useState } from 'react';
import { Paper, Box, Card, CardContent, Typography, Tabs, Tab, Grid, Stack } from '@mui/material';

const tabData = [
  {
    title: 'Tab 1', 
    cards: [
      { title: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://media.istockphoto.com/id/1461166696/photo/a-lake-in-winter-on-which-stands-a-rock-with-two-trees-during-a-sunset.jpg?s=612x612&w=is&k=20&c=ia8LnFQJQR58xEH1-9Y8WTpUcRk0u6frgWnPWGnn0OE=' },
      { title: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://www.ozenduvarkagidi.com.tr/images/urunler/3D-Boyutlu-Magara-Deniz-Manzarasi-resim-11012.jpg' },
      { title: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://st2.depositphotos.com/6379634/9208/i/450/depositphotos_92089112-stock-photo-landscape-in-the-sierra-nevada.jpg' },
]
  },
  {
    title: 'Tab 2', 
    cards: [
        { title: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://img.freepik.com/free-photo/fuji-mountain-kawaguchiko-lake-morning-autumn-seasons-fuji-mountain-yamanachi-japan_335224-102.jpg' },
        { title: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://www.ozenduvarkagidi.com.tr/images/urunler/3D-Boyutlu-Magara-Deniz-Manzarasi-resim-11012.jpg' },
        { title: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://st2.depositphotos.com/6379634/9208/i/450/depositphotos_92089112-stock-photo-landscape-in-the-sierra-nevada.jpg' },
    ]
  },
  {
    title: 'Tab 3',
    cards: [
        { title: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://m.media-amazon.com/images/I/81UwvteWKiL._AC_UF1000,1000_QL80_.jpg' },
        { title: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://www.ozenduvarkagidi.com.tr/images/urunler/3D-Boyutlu-Magara-Deniz-Manzarasi-resim-11012.jpg' },
        { title: 'Distant Galaxy', price: '1.63 ETH', highestBid: '0.33 wETH', imageUrl: 'https://st2.depositphotos.com/6379634/9208/i/450/depositphotos_92089112-stock-photo-landscape-in-the-sierra-nevada.jpg' },
    ]
  }
];

export default function CardTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <>
    <Stack sx={{backgroundColor: '#1a1a1a'}}>
        <Stack className='container'>
        <Paper sx={{ padding: '2rem', backgroundColor: '#1a1a1a'}}>
            {/* Tabs for selecting between different card groups */}
            <Tabs value={tabIndex} onChange={handleTabChange} aria-label="NFT Categories" variant="fullWidth">
                {tabData.map((tab, index) => (
                <Tab key={index} label={tab.title} sx={{fontSize: '128%',  fontFamily: 'serif', color: '#fff'}} />
                ))}
            </Tabs>

            {/* Content based on selected tab */}
            <Box sx={{ marginTop: '1rem' }}>
                <Grid container spacing={2}>
                {tabData[tabIndex].cards.map((card, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                    <Card sx={{ backgroundColor: '#2a2a2a', borderRadius: '12px' }}>
                        <img
                        src={card.imageUrl}
                        alt={card.title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '12px 12px 0 0',
                            objectFit: 'cover',
                        }}
                        />
                        <CardContent>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                            {card.title}
                        </Typography>
                        <Typography sx={{ color: 'gray', fontSize: '14px' }}>Price: {card.price}</Typography>
                        <Typography sx={{ color: 'gray', fontSize: '14px' }}>Highest Bid: {card.highestBid}</Typography>
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
