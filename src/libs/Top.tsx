import { AppBar, Box, Button, Link, Stack, Typography } from "@mui/material";
import { Logout, Search } from "@mui/icons-material";
import { SetStateAction, useState } from "react";

const Top = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event: { currentTarget: SetStateAction<null>; }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#1a1a1a', padding: '1rem 0' }}>
          <Stack className="container">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              {/* Logo Section */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="/img/logo/logoWhite.svg" alt="NFT Marketplace Logo" style={{ width: '120px', height: 'auto' }} />
                <Typography variant="h6" sx={{ color: 'white', marginLeft: '10px', fontFamily: "cursive" }}>
                  NFT Marketplace
                </Typography>
              </Box>
    
              {/* Navigation Links */}
              <Stack direction="row" spacing={4} sx={{marginLeft: "28%"}} >
                <Link href="/" sx={{ color: 'white', textDecoration: 'none', fontFamily: "cursive" }}>Marketplace</Link>
                <Link href="/property" sx={{ color: 'white', textDecoration: 'none', fontFamily: "cursive" }}>Rankings</Link>
                <Link href="/community" sx={{ color: 'white', textDecoration: 'none', fontFamily: "cursive" }}>Connect a wallet</Link>
              </Stack>
    
              {/* Sign Up Button */}
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: '#9b4de0',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#7a3fa0',
                    },
                  }}
                >
                  <Search sx={{ fontSize: '20px', marginRight: '8px', fontFamily: "cursive" }} />
                  Sign Up
                </Button>
              </Box>
            </Stack>
          </Stack>
          </AppBar>
      );
    };

export default Top;
