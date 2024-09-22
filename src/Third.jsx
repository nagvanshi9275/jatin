import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";

export default function Third() {
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={1} direction="column"> {/* Reduced spacing */}
        {/* Step 1 */}
        <Grid item xs={12}>
          <Card style={{ padding: "10px", boxShadow: "none" }}> {/* Reduced padding */}
            <CardContent style={{ paddingBottom: "8px" }}> {/* Adjusted padding */}
              <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: "5px", fontSize: "1.8rem" }}> {}
                Step 1: Set Up<br/>
              </Typography>
              <Typography variant="body1" style={{fontSize: "1.8rem"}}>
                "Easily set up Shravan in a few simple steps and customize your<br/> preferences."
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        
        <Grid item xs={12}>

          <Card style={{ padding: "10px", boxShadow: "none" }}> 
            <CardContent style={{ paddingBottom: "8px" }}> {/* Adjusted padding */}
              <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: "5px", fontSize: "1.8rem" }}> 
                Step 2: Stay Connected
              </Typography>
              <Typography variant="body1" style={{fontSize: "1.8rem"}}>
                "Shravan will remind you of medications, track health stats, and<br/> connect you with family and friends."
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Step 3 */}
        <Grid item xs={12}>
          <Card style={{ padding: "10px", boxShadow: "none" }}> {/* Reduced padding */}
            <CardContent style={{ paddingBottom: "8px" }}> {/* Adjusted padding */}
              <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: "5px", fontSize: "1.8rem" }}> {/* Reduced marginBottom */}
                Step 3: Get Assistance
              </Typography>
              <Typography variant="body1" style={{fontSize: "1.8rem"}}>
                "In case of an emergency, just say 'Shravan, help me!' and<br/> we’ll alert your contacts immediately."
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}








