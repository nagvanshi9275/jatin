import React from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Mic } from "@mui/icons-material"; // Importing microphone icon

// Keyframes for slide-in animation
const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled components
const NavbarContainer = styled("div")({
  position: "relative",
  width: "100%",
  border: "none",
  height: "170px",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(to right, #4caf50, #81c784)",
  transition: "background-color 0.5s ease, box-shadow 0.5s ease",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
  overflow: "hidden",
  animation: `${slideIn} 0.5s ease forwards`, // Apply the animation
});

const Title = styled("h1")({
  fontWeight: 700,
  fontFamily: "'Poppins', sans-serif",
  letterSpacing: "18px",
  color: "#fff",
  margin: "10px 0 0 0",
  textAlign: "center",
});

const MicIcon = styled(Mic)({
  color: "#fff",
  fontSize: "50px",
  marginBottom: "10px",
});

export default function Navbar() {
  return (
    <NavbarContainer>
      <MicIcon />
      <Title>SHARVAN</Title>
    </NavbarContainer>
  );
}
