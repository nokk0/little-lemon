import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import heroImage from "../Assets/heroImg.png";

const Footer = () => {
  return (
    <>
      {/* Background */}
      <Box
        sx={{
          width: "100wh",
          backgroundColor: "customColor.grey",
        }}
      >
        {/* Content */}
        <Box
          sx={{
            mx: "auto",
            width: "70vw",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Box
              component="img"
              src={heroImage}
              alt="/"
              sx={{ width: "162px", height: "279px", borderRadius: "10px" }}
            />
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing="24px"
                >
                  <Typography variant="footerMain">Navigation</Typography>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing="0px"
                  >
                    <Typography variant="footerItem">Home</Typography>
                    <Typography variant="footerItem">About</Typography>
                    <Typography variant="footerItem">menu</Typography>
                    <Typography variant="footerItem">Reservations</Typography>
                    <Typography variant="footerItem">Order Online</Typography>
                    <Typography variant="footerItem">Login</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing="24px"
                >
                  <Typography variant="footerMain">Contact</Typography>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing="0px"
                  >
                    <Typography variant="footerItem">Address</Typography>
                    <Typography variant="footerItem">Phone number</Typography>
                    <Typography variant="footerItem">Email</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing="24px"
                >
                  <Typography variant="footerMain">
                    Social Media links
                  </Typography>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing="0px"
                  >
                    <Typography variant="footerItem">Address</Typography>
                    <Typography variant="footerItem">Phone number</Typography>
                    <Typography variant="footerItem">Email</Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
