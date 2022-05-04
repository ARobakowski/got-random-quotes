import React from "react";
import Button from "@mui/material/Button";

export const QuoteButton = ({getQuote}) => {
  return (
    <Button variant="outlined" size="large" color="error" onClick={getQuote}>
      Get a got quote!
    </Button>
  );
};
