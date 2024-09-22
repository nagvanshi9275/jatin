import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

import Second from "./Second";

export default function Content() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust rotation based on scroll position
      setRotation(scrollY * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ padding: "20px", borderRadius: "8px" }}>
      <Grid container spacing={2}>
        {/* Left Column: Photo Card */}
        <Grid item xs={12} md={6}>
          <Card
            style={{
              maxHeight: "800px",
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",
              position: "relative",
              transition: "transform 0.3s ease",
              transform: `rotate(${rotation}deg)`, // Rotate based on scroll
            }}
          >
            <CardMedia
              component="img"
              image="https://i.postimg.cc/9FTQ0KPQ/alexa.jpg"
              alt="Sample Photo"
              style={{ height: "50%", width: "60%", objectFit: "cover", margin: "0 auto" }}
            />
            <Typography
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "5px",
              }}
            >
              Engaging Caption
            </Typography>
            <CardContent>
              <Typography variant="h6">Photo Title</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column: Text Card */}
        <Grid item xs={12} md={6}>
          <Card
            style={{
              height: "400px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "none", // Remove shadow
              border: "none", // Remove border
              transition: "transform 0.3s ease",
              transform: `rotate(${rotation}deg)`, // Rotate based on scroll
            }}
          >
            <CardContent>
              <Typography variant="h5" style={{ fontWeight: "bold", fontSize: "1.8rem" }}>
                Shravan: Your Companion for
                <br />
                a Healthier, Happier Life
              </Typography>
              <Typography variant="body1" style={{ marginTop: "10px", fontSize: "1.2rem" }}>
                A smart, voice-activated
                <br />
                device designed to assist the anyoune
                <br />
                elderly and those feeling
                <br />
                lonely, with medication
                <br />
                reminders, health monitoring,
                <br />
                and more.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Heading below the cards */}
      <div style={{ marginTop: "100px"}}>
        <Second/>
      </div>
    </div>
  );
}
