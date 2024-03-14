import { Box, Button, Grid, Item, Typography } from "@mui/material";
import React from "react";
import { CtaButton } from "../Common/CtaButton";
import heroImage from "../Assets/heroImg.png";

export const Hero = () => {
  return (
    <>
      {/* background */}
      <Box
        sx={{
          width: "100wh",
          backgroundColor: "customColor.primaryColor.one",
          height: "406px",
        }}
      >
        {/* content */}
        <Box sx={{ mx: "auto", width: "70vw", paddingTop: "40px" }}>
          <Grid container spacing={0}>
            {/* first item */}
            <Grid item sm={7}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="v1">Little Lemon</Typography>
                <Typography variant="v2">Chicago</Typography>
                <Typography variant="v3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>

                <CtaButton>Reserve a Table</CtaButton>
              </Box>
            </Grid>

            {/* second Item */}
            <Grid item sm={5}>
              <Box
                component="img"
                src={heroImage}
                alt="/"
                sx={{ width: "375px", height: "425px", borderRadius: "33px" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
