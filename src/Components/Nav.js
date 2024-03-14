import {
  Button,
  Box,
  Typography,
  AppBar,
  Grid,
  Toolbar,
  Drawer,
  Menu,
  MenuItem,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";

import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { StlyedLink } from "../styles";

export const Nav = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Menu", link: "/menu" },
    { name: "Reservations", link: "/reservations" },
    { name: "Order Online", link: "/order-online" },
    { name: "Login", link: "/login" },
  ];

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "customColor.white",
          boxShadow: "none",
          height: "15vh",
          position: "fixed",
        }}
      >
        <Box sx={{
          display:"flex",
          justifyContent: "center",
          alignContent: 'center',
          height: '100vh',
        }}>

        
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: 'space-between',
            width: '70vw',
          }}
        >
          <Logo />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              gap: 0,
            }}
          >
            {links.map((link) => (
              <StlyedLink
                key={link.name}
                to={link.link}
                sx={{
                  color: "customColor.secondary",
                  paddingX: 2,
                }}
              >
                {link.name}
              </StlyedLink>
            ))}
          </Box>
        </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};
