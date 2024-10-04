import React, { useEffect, useState } from "react";
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

// CSS styles
const styles = {
  container: {
    perspective: "1000px",
  },
  card: {
    padding: "20px",
    boxShadow: "none",
    transition: "transform 0.6s",
    backfaceVisibility: "hidden",
  },
  imageCard: {
    maxHeight: "600px",
    width: "100%",
    transition: "transform 0.6s",
    backfaceVisibility: "hidden",
  },
  fadeInCard: {
    opacity: 0,
    transform: "translateY(20px)",
    animation: "fadeIn 1s forwards",
    padding: "20px",
    boxShadow: "none",
  },
  fadeInImage: {
    opacity: 0,
    transform: "scale(0.5)",
    animation: "fadeInImage 1s forwards",
    animationDelay: "0.5s",
  },
  cardHover: {
    transform: "rotateY(10deg) scale(1.05)", // Add 3D effect on hover
  },
  imageHover: {
    transform: "scale(1.1)", // Add zoom effect on hover
  },
  "@keyframes fadeIn": {
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes fadeInImage": {
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
  },
};

export default function Second() {
  const [showAnimation, setShowAnimation] = useState(false); // State to control animations

  useEffect(() => {
    // Start the animation after the component mounts
    setShowAnimation(true);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" align="center" style={{ marginBottom: "20px" }}>
        We are currently in the working phase
      </Typography>

      <Grid container spacing={2} style={styles.container}>
        {/* Left Column: Text */}
        <Grid item xs={12} md={6}>
          <Card
            style={{
              ...styles.card,
              ...(showAnimation ? styles.fadeInCard : {}),
              transition: "transform 0.6s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "rotateY(10deg) scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "rotateY(0deg) scale(1)")}>
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
          <Card
            style={{
              ...styles.imageCard,
              ...(showAnimation ? styles.fadeInImage : {}),
              transition: "transform 0.6s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
            {/* Image with animation */}
            <CardMedia
              component="img"
              image="https://i.postimg.cc/x8CwbSGk/oldwarrior.jpg"
              alt="AI Technology"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>
      </Grid>

      {/* Inject the CSS keyframes directly into the document */}
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInImage {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}
