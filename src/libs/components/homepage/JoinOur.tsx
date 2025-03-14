import { Box, Button, Card, CardContent, Stack, TextField, Typography } from "@mui/material";

export default function JoinOur() {
   
    return (
      <Stack sx={{backgroundColor: '#1a1a1a', padding: '6rem 0'}}>
      <Stack className='container'  sx={{ marginBottom: '-42px', borderRadius: '60px',}}>
      <Box sx={{ padding: '30px',height: '800px', backgroundColor: 'linear-gradient(to bottom right, #9c27b0, #673ab7)', borderRadius: '20px'  }}>
        <Card sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          borderRadius: '28px',
          height: '500px',
          backgroundColor: '#2a2a2a', }}>
          <Box sx={{ 
            flex: 1, 
            height: '700px', 
            marginTop: '72px', 
            marginLeft: '50px',
             }}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8smTB2LVB3viYZTm3R269VoT4OOamAT_Tfw&s"
              alt="Magic Mashrooms" 
              style={{ width: '90%', height: '50%', objectFit: 'cover', borderRadius: '12px' }} 
            />
          </Box>
          <CardContent sx={{ 
              flex: 1, 
              display: 'flex',
              flexDirection: 'column', 
              justifyContent: 'center', 
              color: 'white', 
              marginLeft: '' }}>
            <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                marginBottom: '10px',
                fontSize: '38px',  
                fontFamily: 'serif',
                marginLeft: '25px' }}>
              Join Our Weekly Digest
            </Typography>
            <Typography variant="body2" sx={{ 
                color: 'white', 
                marginBottom: '3rem',
                fontSize: '20px',
                fontFamily: 'serif',
                marginTop: '15px',
                marginLeft: '26px' }}>
              Get exclusive promotions & updates straight to your inbox.
            </Typography>
            
          </CardContent>
        </Card>
        <Stack>
            <Stack  direction="row" spacing={1} sx={{ 
                 width: '30%', 
                 marginLeft: '54%', 
                 height: '60px',
                 marginTop: '-13%',}}>
              <TextField
                variant="outlined"
                placeholder="Enter your email here"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "26px",
                  flex: 1,
                  padding: "8px 10px",
                
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "26px",
                  },
                  "& .MuiInputBase-input": {
                    padding: "12px 20px",
                  },
                }}
              />
            </Stack>
            </Stack>
        <Stack>
            <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#9b4de0",
                  padding: "12px 20px",
                  borderRadius: "26px",
                  width: '240px',
                  marginLeft: '73%',
                  marginTop: '-13%',
                  height: '60px',
                  "&:hover": {
                    backgroundColor: "#7a3fa0", fontFamily: "cursive"
                  },
                }}
              >
                Subscribe
              </Button>
        </Stack>
      </Box>
      </Stack>
      </Stack>
    );
  }
  