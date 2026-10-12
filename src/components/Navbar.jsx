import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  
  Button,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
<<<<<<< HEAD
=======
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
>>>>>>> e5a0e02f1fc38dfe9e4e82b7dcad89b74dfe2727
import logo from "../Assests/Kannan Infra Projects Logo.jpg";

// Use hash targets instead of full paths
const navLinks = [
  { label: "HOME", id: "" },
  { label: "ABOUT US", id: "about" },
  { label: "READY MIX", id: "readymix" },
  { label: "K BLOCKS", id: "kblocks" },
  { label: "BLUE METALS", id: "bluemetals" },
];

// KNOWLEDGE dropdown items -> these are real routes (react-router-dom)
const knowledgeLinks = [
  { label: "Blog", path: "/knowledge/blog", icon: <ArticleOutlinedIcon fontSize="small" /> },
  { label: "Service Locations", path: "/knowledge/service-locations", icon: <LocationOnOutlinedIcon fontSize="small" /> },
  { label: "FAQs", path: "/knowledge/faqs", icon: <HelpOutlineOutlinedIcon fontSize="small" /> },
<<<<<<< HEAD
=======
  { label: "Tile Fix Pro", path: "/knowledge/tile-fix-pro", icon: <ConstructionOutlinedIcon fontSize="small" /> },
>>>>>>> e5a0e02f1fc38dfe9e4e82b7dcad89b74dfe2727
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [knowledgeAnchor, setKnowledgeAnchor] = useState(null);
  const [mobileKnowledgeOpen, setMobileKnowledgeOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id) => {
    // If we are not on the home page, go home first, then scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = id ? document.getElementById(id) : document.body;
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = id ? document.getElementById(id) : document.body;
      if (element) {
        window.history.pushState(null, "", `#${id}`);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setDrawerOpen(false);
  };

  const handleOpenKnowledge = (e) => setKnowledgeAnchor(e.currentTarget);
  const handleCloseKnowledge = () => setKnowledgeAnchor(null);

  const goToKnowledgePage = (path) => {
    navigate(path);
    handleCloseKnowledge();
    setDrawerOpen(false);
  };

<<<<<<< HEAD
  const goToTileFixPro = () => {
    navigate("/tile-fixpro", { state: { resetScroll: true } });
    handleCloseKnowledge();
    setDrawerOpen(false);
  };

=======
>>>>>>> e5a0e02f1fc38dfe9e4e82b7dcad89b74dfe2727
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
          borderBottom: "1px solid #E5F1FF",
          zIndex: 1300,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation(""); }}>
              <img
                src={logo}
                alt="Logo"
                style={{ height: "80px", maxWidth: "200px", cursor: "pointer" }}
              />
            </a>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
            {navLinks.map((item, index) => (
              <Typography
                key={index}
<<<<<<< HEAD
                onClick={() => (item.path ? goToKnowledgePage(item.path) : handleNavigation(item.id))}
=======
                onClick={() => handleNavigation(item.id)}
>>>>>>> e5a0e02f1fc38dfe9e4e82b7dcad89b74dfe2727
                sx={{
                  fontSize: "12px",
                  color: "#090909",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontWeight: 500,
                  textDecoration: "none",
                  position: "relative",
                  "&:hover": { color: "#FEA515" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#FEA515",
                    bottom: -4,
                    left: 0,
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover::after": { transform: "scaleX(1)" },
                }}
              >
                {item.label}
              </Typography>
            ))}

<<<<<<< HEAD
            <Typography
              component="a"
              href="/tile-fixpro"
              onClick={(event) => {
                event.preventDefault();
                goToTileFixPro();
              }}
              sx={{
                color: "#090909",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: 500,
                textDecoration: "none",
                textTransform: "uppercase",
                position: "relative",
                "&:hover": { color: "#FEA515" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#FEA515",
                  bottom: -4,
                  left: 0,
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s ease",
                },
                "&:hover::after": { transform: "scaleX(1)" },
              }}
            >
              Try Fix Pro
            </Typography>

=======
>>>>>>> e5a0e02f1fc38dfe9e4e82b7dcad89b74dfe2727
            {/* KNOWLEDGE Dropdown Button */}
            <Button
              onClick={handleOpenKnowledge}
              endIcon={
                <KeyboardArrowDownIcon
                  sx={{
                    transition: "transform 0.2s ease",
                    transform: knowledgeAnchor ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              }
              sx={{
                backgroundColor: "#FEA515",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                borderRadius: "8px",
                px: 2.2,
                py: 0.8,
                boxShadow: "none",
                "&:hover": { backgroundColor: "#e8920d", boxShadow: "none" },
              }}
            >
              Knowledge
            </Button>

            <Menu
              anchorEl={knowledgeAnchor}
              open={Boolean(knowledgeAnchor)}
              onClose={handleCloseKnowledge}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 190,
                  borderRadius: "10px",
                  boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                  py: 1,
                },
              }}
            >
              {knowledgeLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <MenuItem
                    key={item.path}
                    onClick={() => goToKnowledgePage(item.path)}
                    sx={{
                      fontSize: "13px",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#FEA515" : "#1A1A1A",
                      backgroundColor: isActive ? "#FFF4DE" : "transparent",
                      py: 1,
                      "&:hover": { backgroundColor: "#FFF4DE" },
                    }}
                  >
                    <ListItemIcon
                      sx={{ minWidth: 30, color: isActive ? "#FEA515" : "#4A4A4A" }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    {item.label}
                  </MenuItem>
                );
              })}
            </Menu>

            <Typography
              onClick={() => handleNavigation("contact")}
              sx={{
                fontSize: "12px",
                color: "#090909",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: 500,
                position: "relative",
                "&:hover": { color: "#FEA515" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#FEA515",
                  bottom: -4,
                  left: 0,
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s ease",
                },
                "&:hover::after": { transform: "scaleX(1)" },
              }}
            >
              CONTACT US
            </Typography>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, pt: { xs: "20px", md: 0 } }} role="presentation">
          <List>
            {navLinks.map((item, index) => (
<<<<<<< HEAD
              <ListItem
                button
                key={index}
                onClick={() => (item.path ? goToKnowledgePage(item.path) : handleNavigation(item.id))}
              >
=======
              <ListItem button key={index} onClick={() => handleNavigation(item.id)}>
>>>>>>> e5a0e02f1fc38dfe9e4e82b7dcad89b74dfe2727
                <ListItemText primary={item.label} />
              </ListItem>
            ))}

            <Divider sx={{ my: 1 }} />

<<<<<<< HEAD
            <ListItem
              component="a"
              href="/tile-fixpro"
              onClick={(event) => {
                event.preventDefault();
                goToTileFixPro();
              }}
            >
              <ListItemText primary="TRY FIX PRO" />
            </ListItem>

=======
>>>>>>> e5a0e02f1fc38dfe9e4e82b7dcad89b74dfe2727
            {/* Mobile KNOWLEDGE section */}
            <ListItem
              button
              onClick={() => setMobileKnowledgeOpen((prev) => !prev)}
              sx={{ backgroundColor: "#FFF4DE" }}
            >
              <ListItemText
                primary="KNOWLEDGE"
                primaryTypographyProps={{ fontWeight: 700, color: "#FEA515" }}
              />
              <KeyboardArrowDownIcon
                sx={{
                  color: "#FEA515",
                  transform: mobileKnowledgeOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </ListItem>

            {mobileKnowledgeOpen &&
              knowledgeLinks.map((item) => (
                <ListItem
                  button
                  key={item.path}
                  onClick={() => goToKnowledgePage(item.path)}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon sx={{ minWidth: 32, color: "#4A4A4A" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}

            <Divider sx={{ my: 1 }} />

            <ListItem button onClick={() => handleNavigation("contact")}>
              <ListItemText primary="CONTACT US" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> e5a0e02f1fc38dfe9e4e82b7dcad89b74dfe2727
