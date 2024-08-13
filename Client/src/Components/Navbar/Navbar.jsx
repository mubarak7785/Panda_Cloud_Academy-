import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Tabs,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
  Tab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [value, setValue] = useState(0); // Add state for Tabs
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

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
              src="https://i.postimg.cc/sD6ZCwym/Panda-Cloud-1-removebg-preview.png"
              alt="Logo"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "60px",
                objectFit: "contain",
              }}
            />
          </Box>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ marginLeft: "auto" }}
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    position: "absolute",
                    top: "64px", // Adjust based on your AppBar height
                    left: 0,
                    right: 0,
                    bottom: "auto", // Default to auto
                    backgroundColor: "#063970",
                    color: "white",
                    boxShadow: "none",
                    border: "none",
                    height: "auto", // Adjust height based on content
                    maxHeight: `calc(100vh - 64px)`, // Maximum height to prevent exceeding viewport
                    overflowY: "auto", // Enable vertical scrolling if content exceeds max height
                  },
                }}
              >
                <Box role="presentation" onClick={toggleDrawer(false)}>
                  <List>
                    {[
                      "AWS",
                      "DEVOPS",
                      "ABOUT US",
                      "CONTACT",
                      "LOGIN",
                      "SIGNUP",
                    ].map((text) => (
                      <ListItem
                        sx={{
                          "&:hover": {
                            backgroundColor: "lightpink",
                          },
                        }}
                        button
                        key={text}
                        component={Link}
                        to={`/${text.toLowerCase().replace(" ", "")}`}
                      >
                        <Typography>{text}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
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
                  to="/aws"
                  sx={{ textDecoration: "none", color: "inherit" }}
                />
                <Tab
                  label="DEVOPS"
                  component={Link}
                  to="/devops"
                  sx={{ textDecoration: "none", color: "inherit" }}
                />
                <Tab
                  label="ABOUT US"
                  component={Link}
                  to="/about"
                  sx={{ textDecoration: "none", color: "inherit" }}
                />
                <Tab
                  label="CONTACT"
                  component={Link}
                  to="/contact"
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
