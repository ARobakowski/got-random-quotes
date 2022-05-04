import React from "react";
import { useState } from "react";
// Components
import { QuoteCard } from "./QuoteCard";
import { QuoteButton } from "./QuoteButton";
// Other
import axios from "axios";
// Material UI
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";

export function App() {
  const [data, updateData] = useState();

  const getQuote = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      "https://game-of-thrones-quotes.herokuapp.com/v1/random"
    );
    updateData(response.data);
  };

  if (data) {
    return (
      <Box
        sx={{
          backgroundImage: `url("https://static.polityka.pl/_resource/res/path/1c/8e/1c8e1bb2-dc89-4a6c-a7e9-25b0e80eb689")`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QuoteCard data={data} getQuote={getQuote} />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        backgroundImage: `url("https://static.polityka.pl/_resource/res/path/1c/8e/1c8e1bb2-dc89-4a6c-a7e9-25b0e80eb689")`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          maxwidth: "50vw",
          maxheight: "30vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: "0.8"
        }}
      >
        <CardContent>
        </CardContent>
        <CardActions>
          <QuoteButton getQuote={getQuote} />
        </CardActions>
      </Card>

      {/* <QuoteButton getQuote={getQuote} /> */}
    </Box>
  );
}
