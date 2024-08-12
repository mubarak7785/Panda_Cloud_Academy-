import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { blue } from "@mui/material/colors";

const Navbar = () => {
  const [value, setValue] = useState();
  const [drawerOpen, setDrawerOpen] = useState(false);
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
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                >
                  <List sx={{ backgroundColor: "#063970", color: "white" }}>
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