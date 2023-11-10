import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import CircularProgress from "@mui/material/CircularProgress";


const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
const [loading, setLoading] = useState(false)
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      setLoading(true)
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
      window.scrollTo({ top: 1500, left: 100, behavior: "smooth" }); 
       setLoading(false)
    } 
  };

  return (
    <Stack mt="37px" p="20px" alignItems="center" justifyContent="center">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You
        <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px" display="flex" gap="10px">
        <TextField
          sx={{
            width: { xs: "70%", sm: "500px", lg: "800px" },
            backgroundColor: "#fff",
            mt: "10px",
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
        />
        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            height: "56px",
            width: { xs: "30%", sm: "100px", lg: "175px" },
            fontSize: { lg: "20px", xs: "14px" },
            ml: "10px",
            mt: "10px",
          }}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>

      {loading &&
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "50px",
          }}
        >
          <CircularProgress />
        </Box>}
    </Stack>
  );
};

export default SearchExercises;
