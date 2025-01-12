import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 1,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.secondary.light : theme.palette.secondary.dark,
      }}
      color="primary"
    >
      <Container maxWidth="sm" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="body1" color="inherit" display="inline">
            Follow Me :
          </Typography>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/vivek-domadiya"
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://github.com/vivekdomadiya"
            target="_blank"
          >
            <GitHub />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/_vivek_domadiya_"
            target="_blank"
          >
            <Instagram />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="body1" color="inherit">
            @ Vivek Domadiya
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
