import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Third() {
  const controls = useAnimation(); // Animation controls
  const [ref, inView] = useInView({ threshold: 0.2 }); // Trigger when 20% of the component is visible

  // Start animation when component is in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation settings for each card
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 }, // initial state (invisible, move down)
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.5, // delay for each step (custom delay)
        duration: 0.5,
        type: "spring",
      },
    }),
  };

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={1} direction="column" ref={ref}> {/* Reference added to track visibility */}
        {/* Step 1 */}
        <Grid item xs={12}>
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            animate={controls} // Controlled animation
            custom={1} // delay for step 1
          >
            <Card style={{ padding: "10px", boxShadow: "none" }}>
              <CardContent style={{ paddingBottom: "8px" }}>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "bold", marginBottom: "5px", fontSize: "1.8rem" }}
                >
                  Step 1: Set Up
                </Typography>
                <Typography variant="body1" style={{ fontSize: "1.8rem" }}>
                  "Easily set up Shravan in a few simple steps and customize your<br /> preferences."
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Step 2 */}
        <Grid item xs={12}>
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            animate={controls} // Controlled animation
            custom={2} // delay for step 2
          >
            <Card style={{ padding: "10px", boxShadow: "none" }}>
              <CardContent style={{ paddingBottom: "8px" }}>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "bold", marginBottom: "5px", fontSize: "1.8rem" }}
                >
                  Step 2: Stay Connected
                </Typography>
                <Typography variant="body1" style={{ fontSize: "1.8rem" }}>
                  "Shravan will remind you of medications, track health stats, and<br /> connect you with family and friends."
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Step 3 */}
        <Grid item xs={12}>
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            animate={controls} // Controlled animation
            custom={3} // delay for step 3
          >
            <Card style={{ padding: "10px", boxShadow: "none" }}>
              <CardContent style={{ paddingBottom: "8px" }}>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "bold", marginBottom: "5px", fontSize: "1.8rem" }}
                >
                  Step 3: Get Assistance
                </Typography>
                <Typography variant="body1" style={{ fontSize: "1.8rem" }}>
                  "In case of an emergency, just say 'Shravan, help me!' and<br /> we’ll alert your contacts immediately."
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
}
