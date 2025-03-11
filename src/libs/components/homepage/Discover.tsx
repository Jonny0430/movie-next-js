import { Box, Card, CardContent, Typography, Grid, Button, Stack, Fab } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';

const nfts = [
  { 
    name: 'Distant Galaxy', 
    artist: 'MoonDancer', 
    price: '1.63 ETH', 
    highestBid: '0.33 wETH', 
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkERuefAjymKEYeFRNC9uWeN0YM0XOSJ3Ow&s' 
  },
  { 
    name: 'Life On Edena', 
    artist: 'NebulaKid', 
    price: '1.63 ETH', 
    highestBid: '0.33 wETH', 
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkERuefAjymKEYeFRNC9uWeN0YM0XOSJ3Ow&s' 
  },
  { 
    name: 'AstroFiction', 
    artist: 'Spaceone', 
    price: '1.63 ETH', 
    highestBid: '0.33 wETH', 
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkERuefAjymKEYeFRNC9uWeN0YM0XOSJ3Ow&s' 
  },
];

const DiscoverNFTS = () => {
  return (
    <>
    <Stack sx={{backgroundColor: '#1a1a1a', marginTop: ''}}>
    <Stack className='container' >
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{
              color: 'white', 
              fontWeight: 'bold', 
              marginBottom: '-2rem', 
              fontSize: '40px',
              fontFamily: 'serif',
              marginTop: '80px'
            }}>
        Discover More NFTs
      </Typography> 
      <Stack sx={{marginLeft: '79%', marginTop: '0px'}}>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" sx={{ 
        width: '247px', 
        height: '50px', 
        border: '2px', 
        borderRadius:'20px',
        fontSize: '19px',
        fontFamily: 'serif',
        fontWeight: 'bold', 
         }} >
        <NavigationIcon sx={{ height: '20px', width: '20px'  }} />
        Navigate
      </Fab>
    </Box>
        </Stack>
      <Typography variant="body1" gutterBottom sx={{
              color: 'white', 
              marginBottom: '3rem',
              fontSize: '20px',
              fontFamily: 'serif'
              }}>
        Explore New Trending NFTs
      </Typography>
      <Grid container spacing={4}>
        {nfts.map((nft, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ position: 'relative', borderRadius: '20px' }}>
              <img 
                src={nft.img} 
                alt={nft.name} 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover', 
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                }} 
              />
              <CardContent sx={{ backgroundColor: '#333', borderRadius: '0 0 12px 12px' }}>
                <Typography variant="h6" sx={{  
                    color: '#fff', 
                    fontSize: '20px',  
                    fontWeight: 'bold',
                    fontFamily: 'serif', }}>
                  {nft.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey' }}>
                  {nft.artist}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Typography variant="body2" sx={{  
                    color: '#fff', 
                    fontSize: '17px',  
                    fontWeight: 'bold',
                    fontFamily: 'serif', }}>
                    Price: {nft.price}
                  </Typography>
                  <Typography variant="body2" sx={{  
                    color: '#fff', 
                    fontSize: '17px',  
                    fontWeight: 'bold',
                    fontFamily: 'serif', }}>
                    Highest Bid: {nft.highestBid}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Stack>
    </Stack>
    </>
  );
}

export default  DiscoverNFTS;
