import { Box, Button, Stack, Typography } from "@mui/material";

export default function ConnectHome() {
  return (

 <Stack>
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '400px',
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkERuefAjymKEYeFRNC9uWeN0YM0XOSJ3Ow&s')",  // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',  // Overlay for better text contrast
        }}
      />
      
      <Stack
        sx={{
          zIndex: 1,
          textAlign: 'center',
          color: 'white',
        }}
      >
    </Stack>
    </Box>
    </Stack>
  );
}
