import React from "react";
// Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { FormatQuote } from "@mui/icons-material";
// Components
import { QuoteButton } from "./QuoteButton";

export const QuoteCard = ({ data, getQuote }) => {
  return (
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
        <div style={{fontSize: "2em", textAlign: "center", marginBottom: "2rem"}}>
          <FormatQuote />
          {data.sentence}
          <FormatQuote />
        </div>
        <div style={{fontSize: "1.2rem", textAlign: "center"}}>
          <p>By the {data.character.name} from the {data.character.house.name}</p>
        </div>
      </CardContent>
      <CardActions>
        <QuoteButton getQuote={getQuote} />
      </CardActions>
    </Card>
  );
};
