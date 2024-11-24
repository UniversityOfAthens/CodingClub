import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const RollingDigits = ({ result, text }) => {
  const [displayNumber, setDisplayNumber] = useState("000");

  useEffect(() => {
    let rollingInterval;

    if (result === 0) {
      // Still loading - start rolling digits
      rollingInterval = setInterval(() => {
        const randomDigits = Math.floor(Math.random() * 900 + 100); // Random number between 100-999
        setDisplayNumber(randomDigits.toString());
      }, 50);
    } else if (result < 0) {
      // Error fetching data
      setDisplayNumber("200+");
    } else {
      // Actual result
      setDisplayNumber(result.toString());
    }

    // Cleanup interval
    return () => {
      if (rollingInterval) clearInterval(rollingInterval);
    };
  }, [result]);
  return (
    <Typography
      sx={{
        width: { xs: "100%", md: "75%" },
        textAlign: "center",
        alignContent: "center",
        alignSelf: "center",
        paddingX: "1rem",
        fontSize: { md: "1.6em", xs: "1.1em" },
        color: "secondary.main",
        fontWeight: "bold",
        justifyItems: "center",
      }}
    >
      {displayNumber} {text}
    </Typography>
  );
};

export default RollingDigits;
