import { Box, Grid, Card, CardContent, Typography, Avatar, Stack } from '@mui/material';
import { FolderOpen, Create, ShoppingCart } from '@mui/icons-material';

const creators = [
  { rank: 1, name: 'Setup Your wallet', sales: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.', img: 'https://www.ozenduvarkagidi.com.tr/images/urunler/3D-Boyutlu-Magara-Deniz-Manzarasi-resim-11012.jpg' },
  { rank: 2, name: 'Create Collection', sales: 'Upload your work and setup your collection. Add a description, social links and floor price.', img: 'https://www.ozenduvarkagidi.com.tr/images/urunler/3D-Boyutlu-Magara-Deniz-Manzarasi-resim-11012.jpg' },
  { rank: 3, name: 'Start Earning', sales: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.', img: 'https://www.ozenduvarkagidi.com.tr/images/urunler/3D-Boyutlu-Magara-Deniz-Manzarasi-resim-11012.jpg' },
];

const HowItWorks = () => {
  return (
    <Stack sx={{ backgroundColor: '#1a1a1a', marginTop: '' }}>
        <Stack className='container'>
      <Box sx={{ padding: '30px', marginTop: '29px'}}>
        <Typography variant="h4" component="h2" gutterBottom sx={{
          color: 'white', 
          fontWeight: 'bold', 
          marginBottom: '-2rem', 
          fontSize: '40px',
          fontFamily: 'serif',
        }}>
          How It Works
        </Typography>
        <Typography variant="body1" gutterBottom sx={{
          color: 'white', 
          marginBottom: '3rem',
          fontSize: '20px',
          fontFamily: 'serif',
          marginTop: '40px'
        }}>
          Find Out How To Get Started
        </Typography>
        <Stack className='container' sx={{ marginLeft: '20%'}}>
        <Grid container spacing={1} >
          {creators.map((creator) => (
            <Grid item xs={12} sm={6} md={4} key={creator.rank} sx={{
                }}>
              <Card sx={{
                 display: 'flex', 
                 flexDirection: 'column', 
                 alignItems: 'center', 
                 padding: '20px', 
                 backgroundColor: '#333', 
                 borderRadius: '12px',
                 height: '100%',
                 width: '80.5%',
                gap:'12px'
                  }}>
                <Stack sx={{marginTop: '19px'}}>
                <Avatar src={creator.img} sx={{ 
                    width: 200,
                    height: 200,
                    marginBottom: '20px'
                     }} />
                </Stack>    
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ 
                    color: '#fff', 
                    fontSize: '20px',  
                    fontWeight: 'bold',
                    fontFamily: 'serif',
                     }}>
                    {creator.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'gray', marginTop: '10px' }}>
                    Total Sales: {creator.sales}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
       </Stack>
      </Box>
    </Stack>
    </Stack>
  );
};

export default HowItWorks;
