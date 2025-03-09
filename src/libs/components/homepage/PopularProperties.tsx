import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PopularProperties = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: '#1a1a1a', padding: '4rem 0' }}>
      <Stack className='container'>
        <Grid container spacing={6} alignItems="center">
          {/* Left Section - Text and Button */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', marginBottom: '1rem', fontSize: '60px', fontFamily: 'serif' }}>
              Discover <br /> Digital Art  & <br/> Collect NFTs
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2rem', fontSize: '20px', fontFamily: 'serif' }}>
              NFT Marketplace UI Created With Anima For Figma. Collect, <br/>
              Buy and Sell Art From More Than 20k NFT Artists.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#9b4de0',
                color: 'white',
                fontWeight: 'bold',
                padding: '12px 24px',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#7a3fa0', fontFamily: 'serif'
                },
              }}
            >
              Get Started
            </Button>
            <Grid container spacing={1} justifyContent="center" sx={{padding: '23px', marginLeft: '-26px'}}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '40px', color: 'white', fontFamily: 'serif' }}> 240k+</Typography>
            <Typography variant="body1" sx={{ color: 'gray', fontSize: '130%', marginLeft: '15px', fontFamily: 'serif' }}>Total Sale</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '40px', color: 'white', fontFamily: 'serif' }}> 100k+</Typography>
            <Typography variant="body1" sx={{ color: 'gray', fontSize: '130%', marginLeft: '18px', fontFamily: 'serif' }}>Auctions</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '40px', color: 'white', fontFamily: 'serif' }}> 240k+</Typography>
            <Typography variant="body1" sx={{ color: 'gray', fontSize: '130%', marginLeft: '23px', fontFamily: 'serif' }}>Artists</Typography>
          </Grid>
        </Grid>
          </Grid>

          {/* Right Section - NFT Card */}
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: '#2a2a2a', borderRadius: '8px', height: '120%', width: '95%' }}>
              <img
                src="https://www.umweltzeichen.at/site/assets/files/4108/schubert_kino_saalansicht_c-mavric_cm81785.535x300.jpg"
                style={{ width: '100%', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontFamily: 'serif' }}>
                  Space Walking
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray', marginBottom: '1rem', fontFamily: 'serif' }}>
                  Animakid
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default PopularProperties;