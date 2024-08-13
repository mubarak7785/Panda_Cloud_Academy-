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
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleOptionClick = () => {
    setDrawerOpen(false); // Close the drawer when an option is clicked
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970", zIndex: 1300 }}>
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
                aria-label={drawerOpen ? "close" : "menu"}
                onClick={toggleDrawer(!drawerOpen)}
                sx={{ marginLeft: "auto" }}
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)} // Close drawer when clicking outside or pressing ESC
                sx={{
                  "& .MuiDrawer-paper": {
                    position: "absolute",
                    top: "64px", // Adjust based on your AppBar height
                    left: 0,
                    right: 0,
                    backgroundColor: "#063970",
                    color: "white",
                    boxShadow: "none",
                    border: "none",
                    maxHeight: "calc(100vh - 64px)", // Adjust height based on content
                    overflowY: "auto",
                    padding: "16px", // Add padding for spacing
                  },
                }}
              >
                <List >
                  {[
                    "Amazon Web Services (AWS)",
                    "Devops",
                    "About Us",
                    "Contact",
                    "Login",
                    "Signup",
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
                      onClick={handleOptionClick} // Close drawer when an option is clicked
                    >
                      <Typography>{text}</Typography>
                    </ListItem>
                  ))}
                </List>
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
