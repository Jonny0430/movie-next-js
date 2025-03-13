import { Grid, Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { Brush, Collections, MusicNote, CameraAlt, Videocam, Tune, SportsBasketball, Public } from '@mui/icons-material';

const categories = [
  { name: 'Art', icon: <Brush sx={{fontSize: '58px'}}/>, img: '' },
  { name: 'Collectibles', icon: <Collections sx={{fontSize: '58px'}}/>, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEmZCbAhJrF6A3St4CSKnef0nEaPW3yVtOQ&s' },
  { name: 'Music', icon: <MusicNote sx={{fontSize: '58px'}}/>, img: '/path/to/music.jpg' },
  { name: 'Photography', icon: <CameraAlt sx={{fontSize: '58px'}}/>, img: '/path/to/photography.jpg' },
  { name: 'Video', icon: <Videocam sx={{fontSize: '58px'}}/>, src:'../img/browse/video.jpeg' },
  { name: 'Utility', icon: <Tune sx={{fontSize: '58px'}}/>, img: '/path/to/utility.jpg' },
  { name: 'Sport', icon: <SportsBasketball sx={{fontSize: '58px'}} />, img: '/path/to/sport.jpg' },
  { name: 'Virtual Worlds', icon: <Public sx={{fontSize: '58px'}}/>, img: '/path/to/virtual-worlds.jpg' },
];

const BrowseCategories = () => {
  return (
    <>
    <Stack sx={{backgroundColor: '#1a1a1a', padding: '4rem 0' }}>
    <Stack className='container'>
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{
        color: '#fff',
        padding: '4rem 0',
        fontWeight: 'bold', 
        marginBottom: '-2rem', 
        fontSize: '40px',
        fontFamily: 'serif',
        marginTop: '80px'
      }}>
        Browse Categories
      </Typography>
      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ 
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'column', 
            textAlign: 'center', 
            borderRadius: '15px',
            width: '240px',
            overflow: 'hidden', // Agar kerak bo'lsa, tasvirni cardga moslashtiradi
            '&:hover img': {
                filter: 'blur(50%)', // Hoverda rasmni tiniqlashtirish
                transition: 'filter 0.3s ease', // Tiniqlashni asta-sekin amalga oshiradi
            },
            '&:hover .image-overlay': {
                opacity: 0, // Overlay xiralikni olib tashlash
                transition: 'opacity 0.3s ease', // Xiralikni olib tashlashni yumoqlashtirish
            }
            }}>
            <Box sx={{ position: 'relative' }}>
                <img 
                src={category.img} 
                alt={category.name} 
                style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    filter: 'blur(4px)', // Boshlang'ich holatda xiralik
                    transition: 'filter 0.3s ease', // Tiniqlashni asta-sekin amalga oshiradi
                }} 
                />
                <Box className="image-overlay" sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '70%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Xira rangini qo'shish
                transition: 'opacity 0.6s ease', // Xiralikning o'zgarishini boshqarish
                opacity: 1, // Boshlang'ichda xira
                }} />
                <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30%',
                fontSize: '38px',
                }}>
                {category.icon}
                </Box>
            </Box>
            <CardContent sx={{ backgroundColor: '#333', borderRadius: '0 0 12px 12px', padding: '1px' }}>
                <Typography variant="h6" sx={{ 
                    color: '#fff', 
                    marginLeft: '-48%',
                    marginBottom: '-5px',
                    marginTop: '12px',
                    fontSize: '20px',  
                    fontWeight: 'bold',
                    fontFamily: 'serif', }}>
                {category.name}
                </Typography>
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

export default BrowseCategories;
