import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const RollingDigits = ({ result, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let rollingInterval;

    // Still loading or count is less than result
    if (result === 0 || (result > 0 && count < result)) {
      rollingInterval = setInterval(
        () => {
          setCount((prevCount) => Math.min(prevCount + 1, result));
        },
        count > 0 ? 0.02 * count : 10
      );
    } else if (result < 0) {
      // Error fetching data
      setCount(-1);
    } else {
      // Actual result
      setCount(result);
    }

    // Cleanup interval
    return () => {
      if (rollingInterval) clearInterval(rollingInterval);
    };
  }, [result, count]);
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
        opacity: count === 0 ? 0 : 1, // display nothing while loading
      }}
    >
      {count <= 0 ? "250+" : count.toString()} {text}
    </Typography>
  );
};

export default RollingDigits;
