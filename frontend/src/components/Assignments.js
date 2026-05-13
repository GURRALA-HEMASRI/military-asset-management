// src/components/Assignments.js
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";

export default function Assignments() {
  const logs = [
    {
      unit: "Infantry Unit A",
      asset: "25 Rifles",
      type: "Assignment",
    },
    {
      unit: "Tank Battalion",
      asset: "2 Tanks",
      type: "Assignment",
    },
    {
      unit: "Training Division",
      asset: "120 Ammo",
      type: "Expenditure",
    },
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 4, color: "#0f172a" }}
      >
        Assignments & Expenditure Operations
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              borderRadius: 5,
              background:
                "linear-gradient(135deg,#22c55e,#06b6d4,#3b82f6)",
              color: "white",
              boxShadow: "0 20px 45px rgba(0,0,0,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                Assign / Expend Assets
              </Typography>

              <TextField
                fullWidth
                label="Asset Name"
                sx={{ mb: 2, background: "white", borderRadius: 2 }}
              />

              <TextField
                fullWidth
                label="Quantity"
                sx={{ mb: 2, background: "white", borderRadius: 2 }}
              />

              <TextField
                fullWidth
                select
                label="Operation Type"
                sx={{ mb: 2, background: "white", borderRadius: 2 }}
              >
                <MenuItem>Assignment</MenuItem>
                <MenuItem>Expenditure</MenuItem>
              </TextField>

              <TextField
                fullWidth
                label="Assigned To"
                sx={{ mb: 3, background: "white", borderRadius: 2 }}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: 1.5,
                  borderRadius: 4,
                  fontWeight: 700,
                  background:
                    "linear-gradient(90deg,#f59e0b,#ef4444,#ec4899)",
                }}
              >
                Confirm Action
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={7}>
          <Card
            sx={{
              borderRadius: 5,
              boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                Activity Logs
              </Typography>

              <List>
                {logs.map((log, index) => (
                  <ListItem key={index}>
                    <Avatar
                      sx={{
                        mr: 2,
                        background:
                          log.type === "Assignment"
                            ? "#3b82f6"
                            : "#ef4444",
                      }}
                    >
                      {log.type[0]}
                    </Avatar>
                    <ListItemText
                      primary={`${log.asset} - ${log.unit}`}
                      secondary={log.type}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}