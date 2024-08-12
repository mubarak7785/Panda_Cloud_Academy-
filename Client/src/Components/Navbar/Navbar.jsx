import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              maxWidth: "200px",
            }}
          >
            <img
              src="https://i.postimg.cc/BQnyQkpn/818606114124305-60354e9639250-removebg-preview.png"
              alt="Logo"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "60px",
                objectFit: "contain",
              }}
            />
          </Box>

          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}></Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
              >
                <Tab
                  label="AWS"
                  component={Link}
                  to="/aws" // Change to the actual path for AWS page
                  sx={{ textDecoration: "none", color: "inherit" }}
                />
                <Tab
                  label="DEVOPS"
                  component={Link}
                  to="/devops" // Change to the actual path for DevOps page
                  sx={{ textDecoration: "none", color: "inherit" }}
                />
                <Tab
                  label="ABOUT US"
                  component={Link}
                  to="/about" // Change to the actual path for About Us page
                  sx={{ textDecoration: "none", color: "inherit" }}
                />
                <Tab
                  label="CONTACT"
                  component={Link}
                  to="/contact" // Change to the actual path for Contact page
                  sx={{ textDecoration: "none", color: "inherit" }}
                />
              </Tabs>
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                component={Link}
                to="/login"
              >
                Login
              </Button>
              <Button
                sx={{ marginLeft: "10px" }}
                variant="contained"
                component={Link}
                to="/signup"
              >
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
