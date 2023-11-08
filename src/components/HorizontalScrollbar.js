import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="10px 10px"
      >
        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    ))}
  </Box>
);
export default HorizontalScrollbar;
