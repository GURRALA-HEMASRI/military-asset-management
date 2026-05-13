// src/components/Login.js
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

export default function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("username", data.username);

      onLogin(data);
    } catch (err) {
      setError("Server connection failed");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        background:
          "linear-gradient(135deg,#0ea5e9 0%, #3b82f6 35%, #8b5cf6 70%, #ec4899 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 420,
          borderRadius: 6,
          boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
        }}
      >
        <CardContent sx={{ p: 5 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center", mb: 4 }}
          >
            Military Login
          </Typography>

          <TextField
            fullWidth
            label="Username"
            name="username"
            onChange={handleChange}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            sx={{ mb: 3 }}
          />

          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{
              py: 1.5,
              borderRadius: 4,
              fontWeight: 700,
              background:
                "linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6)",
            }}
          >
            Login
          </Button>

          <Typography sx={{ mt: 4, fontSize: 14 }}>
            Demo Users:
            <br />
            admin / admin123
            <br />
            commander / commander123
            <br />
            logistics / logistics123
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}