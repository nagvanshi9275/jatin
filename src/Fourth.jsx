

import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Fourth() {
  const controls = useAnimation(); // Animation controls
  const [ref, inView] = useInView({ threshold: 0.2 }); // Trigger when 20% of the component is visible

  // Start the animation when the component is in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation settings
  const wordAnimation = {
    hidden: { opacity: 0, y: 50 }, // initial state (invisible, move up)
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2, // custom delay for each word
        duration: 0.5,
        type: "spring",
      },
    }),
  };

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2} ref={ref}> {/* Reference added to track visibility */}
        {/* Card 1 with centered text */}
        <Grid item xs={12} md={6}>
          <Card
            style={{
              padding: "10px",
              boxShadow: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <CardContent style={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                style={{ fontWeight: "bold", marginBottom: "10px", fontSize: "2.9rem" }}
              >
                <motion.span
                  variants={wordAnimation}
                  initial="hidden"
                  animate={controls} // Controlled animation
                  custom={1} // custom delay for "Get"
                >
                  "Get
                </motion.span>{" "}
                <motion.span
                  variants={wordAnimation}
                  initial="hidden"
                  animate={controls} // Controlled animation
                  custom={2} // custom delay for "in"
                >
                  in
                </motion.span>{" "}
                <motion.span
                  variants={wordAnimation}
                  initial="hidden"
                  animate={controls} // Controlled animation
                  custom={3} // custom delay for "Touch"
                >
                  Touch"
                </motion.span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 with a centered paragraph and button */}
        <Grid item xs={12} md={6}>
          <Card style={{ padding: "10px", boxShadow: "none" }}>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%", // Ensure the card content fills the height of the card
                textAlign: "center", // Center the text
              }}
            >
              <Typography
                variant="body1"
                style={{ fontSize: "1.8rem", marginBottom: "20px" }} // Add margin to space out the text from the button
              >
                Have questions about
                <br />
                Shravan? Want to learn more
                <br />
                about how our device can
                <br />
                help you or your loved ones?
                <br />
                We’d love to hear from you!
              </Typography>

              {/* Centered Email Button */}
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black", // Black background
                  color: "white", // White text
                  padding: "10px 20px", // Button padding
                  fontSize: "1.2rem", // Text size
                }}
              >
                Email
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}







