import React from "react";

export default function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        border: "2px solid rgba(0, 0, 0, 0.2)", // Light black with 20% opacity
        height: "170px",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontWeight: 700, // Bolder weight for the font
          fontFamily: "'Poppins', sans-serif", // Use Poppins font
          letterSpacing: "18px",
        }}
      >
        SHARVAN
      </h1>
    </div>
  );
}
