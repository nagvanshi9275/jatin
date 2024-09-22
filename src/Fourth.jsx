

import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function Fourth() {
  return (
    <div style={{ padding: "20px" }}>
      

      <Grid container spacing={2}>
        {/* Card 1 with centered text */}
        <Grid item xs={12} md={6}>
          <Card style={{ padding: "10px", boxShadow: "none", display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
            <CardContent style={{ textAlign: "center" }}>
              <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: "10px", fontSize: "1.9rem" }}>
                Get in Touch
              </Typography>
             
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 with a paragraph */}
        <Grid item xs={12} md={6}>
          <Card style={{ padding: "10px", boxShadow: "none" }}>
            <CardContent>
              <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: "10px", fontSize: "2.5rem" }}>
                Paragraph
              </Typography>
              <Typography variant="body1"style={{fontSize: "1.8rem"}}>
              Have questions about<br/> Shravan? Want to learn more<br/> about how our device can<br/> help you or your loved ones?<br/> We’d love to hear from you!"
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}








