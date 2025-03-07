import { Box, Button, Link, Stack, Typography, TextField } from "@mui/material";
import { Instagram, YouTube, Gamepad } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1a1a1a", color: "white", padding: "3rem 0" }}>
      <Box
        sx={{
          width: "100%",
          margin: "0 auto",
          padding: "0 16px", // Add some padding for better alignment
        }}
      > <Stack className="container">
        <Stack direction="row" justifyContent="space-between" spacing={6}>
          {/* Left Section */}
          <Stack className="container">
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1.5rem" }}>
              NFT Marketplace
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "1.5rem" }}>
              NFT marketplace UI created with Anima for Figma.
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "1.5rem" }}>
              Join our community
            </Typography>
            <Stack direction="row" spacing={3}>
              <Link href="#" sx={{ color: "white" }}>
                <Gamepad />
              </Link>
              <Link href="#" sx={{ color: "white" }}>
                <YouTube />
              </Link>
              <Link href="#" sx={{ color: "white" }}>
                <Instagram />
              </Link>
            </Stack>
          </Box>
          </Stack>

          {/* Middle Section */}
          <Stack className="container">
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1.5rem" }}>
              Explore
            </Typography>
            <Stack direction="column" spacing={3}>
              <Link href="/" sx={{ color: "white", textDecoration: "none" }}>Marketplace</Link>
              <Link href="/rankings" sx={{ color: "white", textDecoration: "none" }}>Rankings</Link>
              <Link href="/connect-wallet" sx={{ color: "white", textDecoration: "none" }}>Connect a wallet</Link>
            </Stack>
          </Box>
          </Stack>

          {/* Right Section */}
          <Stack className="container">
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1.5rem" }}>
              Join Our Weekly Digest
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "1.5rem" }}>
              Get exclusive promotions & updates straight to your inbox.
            </Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                variant="outlined"
                placeholder="Enter your email here"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  flex: 1,
                  padding: "12px 20px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                  "& .MuiInputBase-input": {
                    padding: "12px 20px",
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#9b4de0",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#7a3fa0",
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Stack>
        </Stack>
        </Stack>

        {/* Bottom Section */}
        <Stack className="container">
        <Box sx={{ marginTop: "2rem", textAlign: "center", paddingTop: "1rem", marginLeft: '-80%' }}>
          <Typography variant="body2">
            © NFT Market. Use this template freely.
          </Typography>
        </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
