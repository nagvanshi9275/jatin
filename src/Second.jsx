import React from "react";
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

export default function Second() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" align="center" style={{ marginBottom: "20px" }}>
        We are currently in the working phase 
      </Typography>

      <Grid container spacing={2}>
        {/* Left Column: Text */}
        <Grid item xs={12} md={6}>
          <Card style={{ padding: "20px", boxShadow: "none" }}>
            <CardContent>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Transforming Lives with AI
              </Typography>
              
              {/* Updated Typography with increased font size */}
              <Typography variant="body1" style={{ marginTop: "10px", fontSize: "1.2rem" }}>
                Medication Reminders:
                <br /> "Never miss a dose with
                <br /> personalized, voice-activated
                <br /> medication alerts."
              </Typography>
              
              <Typography variant="body1" style={{ marginTop: "10px", fontSize: "1.2rem" }}>
                Health Monitoring:
                <br /> "Track your vitals in real-time
                <br /> and stay ahead of potential
                <br /> health risks."
              </Typography>
              
              <Typography variant="body1" style={{ marginTop: "10px", fontSize: "1.2rem" }}>
                Emergency Assistance:
                <br /> "Instant SOS alerts to family
                <br /> or emergency services in
                <br /> case of a fall or emergency."
              </Typography>
              
              <Typography variant="body1" style={{ marginTop: "10px", fontSize: "1.2rem" }}>
                Companionship:
                <br /> "Engage in friendly
                <br /> conversations, receive daily
                <br /> motivational messages, and
                <br /> reduce feelings of
                <br /> loneliness."
              </Typography>
              
              <Typography variant="body1" style={{ marginTop: "10px", fontSize: "1.2rem" }}>
                Family Connectivity:
                <br /> "Easily connect with loved
                <br /> ones through voice or video
                <br /> calls, keeping you closer to
                <br /> family."
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column: Image */}
        <Grid item xs={12} md={6}>
          <Card style={{ maxHeight: "600px", width: "100%" }}>
            {/* Image */}
            <CardMedia
              component="img"
              image="https://i.postimg.cc/x8CwbSGk/oldwarrior.jpg"
              alt="AI Technology"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
