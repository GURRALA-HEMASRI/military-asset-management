import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  CssBaseline,
  Button,
} from "@mui/material";

import Dashboard from "./components/Dashboard";
import Purchases from "./components/Purchases";
import Transfers from "./components/Transfers";
import Assignments from "./components/Assignments";
import Login from "./components/Login";

const drawerWidth = 260;

export default function App() {
  const [page, setPage] = useState("dashboard");

  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? {
          token: localStorage.getItem("token"),
          role: localStorage.getItem("role"),
          username: localStorage.getItem("username"),
        }
      : null
  );

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  const menu = [
    ["Dashboard", "dashboard"],
    ["Purchases", "purchases"],
    ["Transfers", "transfers"],
    ["Assignments", "assignments"],
  ];

  const allowedMenu = menu.filter((item) => {
    if (user.role === "Admin") return true;

    if (
      user.role === "Logistics Officer" &&
      ["dashboard", "purchases"].includes(item[1])
    ) {
      return true;
    }

    if (
      user.role === "Base Commander" &&
      ["dashboard", "transfers", "assignments"].includes(item[1])
    ) {
      return true;
    }

    return false;
  });

  const renderPage = () => {
    if (page === "dashboard") {
      return <Dashboard token={user.token} />;
    }

    if (page === "purchases") {
      return user.role === "Admin" || user.role === "Logistics Officer" ? (
        <Purchases token={user.token} />
      ) : (
        <Typography variant="h5">Unauthorized Access</Typography>
      );
    }

    if (page === "transfers") {
      return user.role === "Admin" || user.role === "Base Commander" ? (
        <Transfers token={user.token} />
      ) : (
        <Typography variant="h5">Unauthorized Access</Typography>
      );
    }

    if (page === "assignments") {
      return user.role === "Admin" || user.role === "Base Commander" ? (
        <Assignments token={user.token} />
      ) : (
        <Typography variant="h5">Unauthorized Access</Typography>
      );
    }

    return <Dashboard token={user.token} />;
  };

  return (
    <Box sx={{ display: "flex", fontFamily: "Poppins" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          background:
            "linear-gradient(90deg, #00c6ff 0%, #0072ff 35%, #7b2ff7 100%)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Military Asset Management System
          </Typography>

          <Box>
            <Typography sx={{ display: "inline", mr: 2 }}>
              {user.username} ({user.role})
            </Typography>

            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background:
              "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #312e81 100%)",
            color: "white",
          },
        }}
      >
        <Toolbar />

        <List>
          {allowedMenu.map(([label, value]) => (
            <ListItemButton
              key={value}
              onClick={() => setPage(value)}
              sx={{
                m: 1,
                borderRadius: 3,
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)",
                },
              }}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontWeight: 600,
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          background:
            "linear-gradient(135deg, #e0f7ff 0%, #eef2ff 50%, #f5e8ff 100%)",
          minHeight: "100vh",
          p: 4,
        }}
      >
        <Toolbar />
        {renderPage()}
      </Box>
    </Box>
  );
}