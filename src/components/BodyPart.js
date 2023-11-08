import React from "react";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1500, left: 100, behavior: "smooth" });
      }}
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        borderBottomLeftRadius: "10px",
        backgroundColor: "#fff",
        width: "100px",
        height: "40px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        fontSize="15px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
