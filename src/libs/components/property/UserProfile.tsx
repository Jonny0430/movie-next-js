import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Instagram, YouTube, Facebook, Twitter } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function UserProfile() {
  return (
  <>
    <Stack sx={{backgroundColor: '#1a1a1a',}}>
    <Stack className="container" sx={{
        padding: '2rem',
        borderRadius: '10px',
        width: '100%',
        maxWidth: '800px',
        margin: 'auto',
      }}>
    <Box
      sx={{
        padding: '2rem',
        borderRadius: '10px',
        width: '100%',
        maxWidth: '800px',
        margin: 'auto',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        {/* Profile Picture */}
        <Box
          sx={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundImage: "url('/path-to-your-image.jpg')", // Update with your image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Stack>
    </Box>
    </Stack>
    <Stack className="container">
          <Typography variant="h5" sx={{  fontWeight: 'bold', 
            marginBottom: '10px',
            marginLeft: '110px',
            fontSize: '40px',  
            fontFamily: 'serif',
            color: '#fff',
            marginTop: '-130px' }}>
            Animakid
          </Typography>  
              {/* Action Buttons */}
              <Stack sx={{marginLeft: '73%', marginTop: '-53px'}}>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Fab variant="extended" sx={{width: '50%', height: '49px', }}>
                <NavigationIcon sx={{ mr: 1, marginLeft: '-20px' }} />
                Navigate
            </Fab>
            </Box>
            </Stack>
          <Grid container spacing={1} sx={{marginLeft: '105px', marginTop: '17px'}}>
            <Grid item xs={2}>
              <Typography sx={{  color: 'white', fontSize: '19px'  }}>250k+</Typography>
              <Typography sx={{ fontSize: '20px',color: 'gray', fontFamily: 'serif' }}>Volume</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography sx={{ color: 'white', fontSize: '19px'}}>50+</Typography>
              <Typography sx={{ fontSize: '20px', color: 'gray', fontFamily: 'serif' }}>NFTs Sold</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography sx={{ color: 'white', fontSize: '19px' }}>3000+</Typography>
              <Typography sx={{ fontSize: '20px', color: 'gray', fontFamily: 'serif' }}>Followers</Typography>
            </Grid>
          </Grid>
        </Stack>
        <Stack className="container">
       <Typography variant="body2" sx={{ 
        marginTop: '1rem', 
        color: 'gray', 
        marginLeft: '118px', 
        fontSize: '20px',
        fontFamily: 'serif' }}>
        Bio
       </Typography>
        <Typography variant="body2" sx={{
             marginTop: '2rem', 
             color: '#fff', 
             marginLeft: '120px', 
             fontSize: '23px',
             fontFamily: 'serif' }}>
        The Internet's Friendliest Designer Kid.
      </Typography>
      <Typography variant="body2" sx={{ 
        marginTop: '2rem', 
        color: 'gray', 
        marginLeft: '120px', 
        fontSize: '20px',
        fontFamily: 'serif' }}>
        Links
       </Typography>

      {/* Social Links */}
      <Stack direction="row" spacing={2} sx={{ marginTop: '2rem', marginLeft: '125px', marginBottom: '60px' }}>
        <Instagram sx={{ color: '#9b4de0' }} />
        <YouTube sx={{ color: '#9b4de0' }} />
        <Twitter sx={{ color: '#9b4de0' }} />
        <Facebook sx={{ color: '#9b4de0' }} />
      </Stack>
      </Stack>
    </Stack>
    </>
  );
}
