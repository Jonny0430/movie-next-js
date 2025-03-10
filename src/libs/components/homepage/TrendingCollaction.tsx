import { Box, Card, CardContent, CardMedia, Grid, Button, Typography, Container, Stack } from '@mui/material';

// NFT collections data
const collections = [
  {
    id: 1,
    image1:'https://www.visitkranj.com/wp-content/uploads/2024/09/moj-kino.jpg',
  },
  {
    id: 2,
    image1: 'https://www.the-berliner.com/wp-content/uploads/2022/01/kinos-scaled.jpg', // Image URL
  },
  {
    id: 3,
    image1: 'https://bnn.de/img/11715010/xTrQBHZYtGKkSCmEOGmKEw/Langewitz?size=1920&format=jpeg&variant=LANDSCAPE_16x9',
  },
];

const newDishes = [
    {
      id: 1,
      image:'https://www.student.si/wp-content/uploads/2023/06/red-cinema-seats-and-cola-popcorn-and-glasses-in-empty-theater-cinema-movie-theater-concept-background-3d-illustration-stockpack-istock.jpg',
    },
    {
      id: 2,
      image: 'https://media.istockphoto.com/id/1478374885/photo/joyful-family-watching-movie-in-cinema.jpg?s=612x612&w=0&k=20&c=U0Qp-c2vCTUPG51ZOD2H7KcrByyBKow3r9wSR2QMFZU=', // Image URL
    },
    {
      id: 3,
      image: 'https://www.newportri.com/gcdn/authoring/2018/01/16/NNDN/ghows-PJ-ccc63fa8-8095-4cc1-ac50-41efbd7d1120-c1be348f.jpeg?width=660&height=372&fit=crop&format=pjpg&auto=webp',
    },
];

const newTitle = [
    {
      id: 1,
      title: '1025+',
    },
    {
      id: 2,
      title: '1025+',
    },
    {
      id: 3,
      title: 'Desktop Card',
    },
];
const newTotal = [
    {
      id: 1,
      total: '15+',
    },
    {
      id: 2,
      title: '1025+',
    },
    {
      id: 3,
      title: 'Desktop Card',
    },
];

const TrendingCollections = () => {
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', padding: '4rem 0' }}>
      <Stack className='container'>
        {/* Title Section */}
        <Typography variant="h4" sx={{ 
            color: 'white', 
            fontWeight: 'bold', 
            marginBottom: '1rem', 
            fontSize: '40px',
            fontFamily: 'serif' }}>
          Trending Collection
        </Typography>
        <Typography variant="h6" sx={{ 
            color: 'white', 
            marginBottom: '3rem',
            fontSize: '20px',
            fontFamily: 'serif' }}>
          Checkout Our Weekly Updated Trending Collection.
        </Typography>

        {/* Grid for NFT Collections */}
        <Grid container spacing={4}>
          {/* Map through collections */}
          {collections.map((collection) => (
            <Grid item xs={12} sm={6} md={4} key={collection.id}>
              <Card sx={{ backgroundColor: '#2a2a2a', borderRadius: '15px', width: '83%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={collection.image1} // Dynamic image URL
                  sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                />    
              </Card>

              {/* Stack to display small images */}
              <Stack direction="row" spacing={2} sx={{ position: 'relative', top: '-20px' }}>
                {newDishes.map((dish) => (
                  <Card sx={{
                    backgroundColor: '#2a2a2a',
                    borderRadius: '8px',
                    width: '100px',
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    top: '50px',
                    
                  }} key={dish.id}>
                   
                    <CardMedia
                      component="img"
                      height="100"
                      image={dish.image} // Dynamic image URL
                      sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                    />
                  </Card>  
                ))}
              </Stack>

              {/* Dynamically display titles based on collection id */}
              <Stack direction="row" spacing={2} sx={{ 
                position: 'relative', 
                top: '43px',
                 marginLeft: 'px' }}>
                {newTitle
                  .filter(title => title.id === collection.id) // Filter titles based on collection id
                  .map((titles) => (
                    <Typography variant="h6" sx={{ 
                        color: 'white', 
                        fontWeight: 'bold', 
                        fontFamily: 'serif',
                        fontSize: '22px'
                         }} key={titles.id}>
                      {titles.title}
                    </Typography>
                  ))
                }
              </Stack>
              <Stack direction="row" spacing={2} sx={{ position: 'relative', top: '43px', marginLeft: 'px' }}>
                {newTotal
                  .filter(total => total.id === collection.id) // Filter titles based on collection id
                  .map((totals) => (
                    <Typography variant="h6" sx={{ 
                        color: 'white',
                        fontWeight: 'bold', 
                        fontFamily: 'serif',
                        fontSize: '18px' 
                        }} key={totals.id}>
                      {totals.total}
                    </Typography>
                  ))
                }
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default TrendingCollections;
