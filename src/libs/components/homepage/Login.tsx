import { Box, Button, TextField, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function LoginS() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    // Handle form submission
    console.log({ username, email, password, confirmPassword });
  };

  return (
    <Stack sx={{backgroundColor: "#1a1a1a", padding: "5rem"}}>
    <Stack className="container">
     <Stack sx={{ flexDirection: "row", backgroundColor: "#1a1a1a", padding: "5rem" }}>
      <Box
        sx={{
          flex: 1,
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_Jhka5LpEaU86R2ST-4S_7ZL6f_R8-vpgw&s')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "644px",
          borderRadius: '19px 0px 0 19px'
        }}
      >
        {/* Background Image Area */}
      </Box>
      
      <Stack
        sx={{
          flex: 1,
          backgroundColor: "#2a2a2a",
          padding: "4rem",
          borderRadius: '0 19px 19px 0px',
          marginLeft: "1px",
        }}
      >
        <Typography variant="h4" sx={{
            fontWeight: 'bold', 
            marginBottom: '10px',
            marginLeft: '112px',
            fontSize: '40px',  
            fontFamily: 'serif',
            color: '#fff' }}>
          Create Account
        </Typography>
        <Typography variant="body1" sx={{ color: "white", marginBottom: "2rem" ,fontSize: '25px', fontFamily: 'serif'  }}>
          Welcome! Enter Your Details And Start Creating, Collecting And Selling NFTs.
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          sx={{ 
            marginBottom: "1.5rem", 
            backgroundColor: "#fff",
            borderRadius: "25%",
            width: '70%',
            marginLeft: '15%' }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          sx={{  marginBottom: "1.5rem", 
            backgroundColor: "#fff",
            borderRadius: "25%",
            width: '70%',
            marginLeft: '15%' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: "1.5rem", 
            backgroundColor: "#fff",
            borderRadius: "25%",
            width: '70%',
            marginLeft: '15%' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{  marginBottom: "1.5rem", 
            backgroundColor: "#fff",
            borderRadius: "25%",
            width: '70%',
            marginLeft: '15%' }}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#9b4de0",
            padding: "12px 20px",
            borderRadius: "26px",
            width: "70%",
            marginLeft: '15%',
            height: '62px',
            "&:hover": {
              backgroundColor: "#7a3fa0",
              fontFamily: "cursive",
            },
          }}
          onClick={handleSubmit}
        >
          Create Account
        </Button>
      </Stack>
    </Stack>
    </Stack>
    </Stack>
  );
}
