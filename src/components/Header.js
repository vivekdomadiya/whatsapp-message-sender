import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { Brightness7, Brightness4 } from "@mui/icons-material";

function Header({ toggleTheme, theme }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <img src="img/whatsapp.png" alt="WP" style={{ marginRight: 10 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            WhatsApp Message Sender
          </Typography>
          <IconButton color="inherit" onClick={toggleTheme}>
            {theme === "light" ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
