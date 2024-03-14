import React from "react";
import { Nav } from "./Nav";
import { Box, Button } from "@mui/material";
import { Hero } from "./Hero";
import Highlights from "./Highlights";
import Footer from "./Footer";

const Home = () => {
  return (
    <Box sx={{ paddingTop: "15vh" }}>
      <Nav />
      <Hero />
      <Highlights />
      <Footer />
    </Box>
  );
};

export default Home;
