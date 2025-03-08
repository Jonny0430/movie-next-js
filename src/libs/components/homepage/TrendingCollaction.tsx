import { Box, Card, CardContent, CardMedia, Grid, Button, Typography, Container, Stack } from '@mui/material';

// NFT collections data
const collections = [
  {
    id: 1,
    image1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BrFG-gGzVygxRcle9Bb_xdYD0IkvkACAmg&s',
    image: 'https://via.placeholder.com/300x200', // Image URL
    total: '1025+',
  },
  {
    id: 2,
    image1: 'https://via.placeholder.com/300x200', // Image URL
    image: 'https://via.placeholder.com/300x200', // Image URL
    total: '1025+',
  },
  {
    id: 3,
    image1: 'https://via.placeholder.com/300x200',
    image: 'https://via.placeholder.com/300x200', // Image URL
    total: '1025+',
  },
];

const newDishes = [
    {
      id: 1,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BrFG-gGzVygxRcle9Bb_xdYD0IkvkACAmg&s',
      total: '1025+',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200', // Image URL
      total: '1025+',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200',
      title: 'Desktop Card',
      total: 'MrFox',
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
        <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}>
          Trending Collection
        </Typography>
        <Typography variant="h6" sx={{ color: 'white', marginBottom: '3rem' }}>
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
                    top: '50px'
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
              <Stack direction="row" spacing={2} sx={{ position: 'relative', top: '43px', marginLeft: 'px' }}>
                {newTitle
                  .filter(title => title.id === collection.id) // Filter titles based on collection id
                  .map((titles) => (
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }} key={titles.id}>
                      {titles.title}
                    </Typography>
                  ))
                }
              </Stack>
              <Stack direction="row" spacing={2} sx={{ position: 'relative', top: '43px', marginLeft: 'px' }}>
                {newTotal
                  .filter(total => total.id === collection.id) // Filter titles based on collection id
                  .map((totals) => (
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }} key={totals.id}>
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
