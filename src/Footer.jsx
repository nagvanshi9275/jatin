

import React from "react";
import { IconButton, Grid } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f8f8f8" }}>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item>
          <IconButton href="https://www.facebook.com" target="_blank">
            <Facebook style={{ color: "#4267B2", fontSize: "2rem" }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.twitter.com" target="_blank">
            <Twitter style={{ color: "#1DA1F2", fontSize: "2rem" }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.instagram.com" target="_blank">
            <Instagram style={{ color: "#C13584", fontSize: "2rem" }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.linkedin.com" target="_blank">
            <LinkedIn style={{ color: "#0A66C2", fontSize: "2rem" }} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}





