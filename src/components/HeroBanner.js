import React from "react";
import { Box, Typography, Button } from "@mui/material";
import gymPic from "../assets/images/gym-pic.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: "50px",
        mx: { sm: "50px" },
        position: "relative",
        p: "20px",
        backgroundImage: `url(${gymPic})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography
        color="#ff2625"
        fontWeight="600"
        sx={{ fontSize: { lg: "26px", xs: "22px" } }}
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        color="#ffffff"
        sx={{ fontSize: { lg: "44px", xs: "30px" }, mb: "20px" }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      {/* <Typography
        lineHeight="35px"
        mb={3}
        mt="100px"
        color="#ffffff"
        sx={{ fontSize: { lg: "22px", xs: "18px" } }}
      >
        Check out the most effective exercises
      </Typography> */}
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ p: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        // fontSize="200px"
        fontWeight="600"
        sx={{
          opacity: 0.15,
          mt: 15,
          fontSize: { lg: "200px", sm: "100px", xs: "60px" },
          color: "#ffffff",
        }}
      >
        EXERCISE
      </Typography>
    </Box>
  );
};

export default HeroBanner;
