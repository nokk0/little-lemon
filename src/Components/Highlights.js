import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  colors,
} from "@mui/material";
import React from "react";
import { CtaButton } from "../Common/CtaButton";
import greekSalad from "../Assets/greekSalad.jpg";
import deliveryIcon from "../Assets/deliveryIcon.png";
import lemonDesert from "../Assets/LemonDesert.png";

const Highlights = () => {
  return (
    <>
      {/* background */}
      <Box
        sx={{
          width: "100wh",
          backgroundColor: "customColor.white",
        }}
      >
        {/* Content */}
        <Box
          sx={{
            mx: "auto",
            width: "70vw",
            paddingTop: "90px",
            paddingBottom: "40px",
            marginBottom: "73px",
          }}
        >
          {/* Upper part */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="v4" >
              This weeks special!
            </Typography>

            <CtaButton>Online Menu</CtaButton>
          </Box>
          {/* Lower part */}
          <Box sx={{ marginTop: "55px" }}>
            <Grid container spacing={1}>
              {/* Card 1 */}
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 264 }}>
                  <CardMedia
                    sx={{
                      height: 185,
                      width: 264,
                      borderRadius: "20px 20px 0 0",
                    }}
                    image={greekSalad}
                    title="greek salad"
                  />
                  <CardContent
                    sx={{
                      padding: "20px 25px",
                      backgroundColor: "customColor.grey",
                    }}
                  >
                    <Box>
                      <Stack direction="column" spacing={3}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography variant="mealName">
                            Greek salad
                          </Typography>
                          <Typography variant="mealPrice">$12.99</Typography>
                        </Stack>

                        <Typography variant="mealDetail">
                          The famous greek salad of crispy lettuce, peppers,
                          olives and our Chicago style feta cheese, garnished
                          with crunchy garlic and rosemary croutons.{" "}
                        </Typography>

                        <Stack
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="center"
                          spacing={2}
                        >
                          <Typography variant="mealDelivery">
                            Order a delivery
                          </Typography>
                          <img src={deliveryIcon} alt="delivery icon" />
                        </Stack>
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Card 2 */}
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 264 }}>
                  <CardMedia
                    sx={{
                      height: 185,
                      width: 264,
                      borderRadius: "20px 20px 0 0",
                    }}
                    image={greekSalad}
                    title="greek salad"
                  />
                  <CardContent
                    sx={{
                      padding: "20px 25px",
                      backgroundColor: "customColor.grey",
                      height: "200px",
                    }}
                  >
                    <Box>
                      <Stack direction="column" spacing={3}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography variant="mealName">Bruchetta</Typography>
                          <Typography variant="mealPrice">$5.99</Typography>
                        </Stack>

                        <Typography variant="mealDetail">
                          Our Bruschetta is made from grilled bread that has
                          been smeared with garlic and seasoned with salt and
                          olive oil.   <br /> <br />{" "}
                        </Typography>

                        <Stack
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="center"
                          spacing={2}
                          
                        >
                          <Typography variant="mealDelivery">
                            Order a delivery
                          </Typography>
                          <img src={deliveryIcon} alt="delivery icon" />
                        </Stack>
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Card 3 */}
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 264 }}>
                  <CardMedia
                    sx={{
                      height: 185,
                      width: 264,
                      borderRadius: "20px 20px 0 0",
                    }}
                    image={lemonDesert}
                    title="greek salad"
                  />
                  <CardContent
                    sx={{
                      padding: "20px 25px",
                      backgroundColor: "customColor.grey",
                    }}
                  >
                    <Box>
                      <Stack direction="column" spacing={3}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography variant="mealName">
                            Lemon Desert
                          </Typography>
                          <Typography variant="mealPrice">$5.00</Typography>
                        </Stack>

                        <Typography variant="mealDetail">
                          This comes straight from grandma’s recipe book, every
                          last ingredient has been sourced and is as authentic
                          as can be imagined. <br /> <br />{" "}
                        </Typography>

                        <Stack
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="center"
                          spacing={2}
                        >
                          <Typography variant="mealDelivery">
                            Order a delivery
                          </Typography>
                          <img src={deliveryIcon} alt="delivery icon" />
                        </Stack>
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Highlights;
