// src/components/Dashboard.js
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "Vehicles", value: 40 },
  { name: "Weapons", value: 35 },
  { name: "Ammunition", value: 25 },
];

const barData = [
  { base: "Alpha", assets: 300 },
  { base: "Bravo", assets: 250 },
  { base: "Charlie", assets: 190 },
  { base: "Delta", assets: 150 },
];

const colors = ["#00c6ff", "#7b2ff7", "#ff9800"];

const cards = [
  {
    title: "Total Assets",
    value: "8,920",
    gradient: "linear-gradient(135deg,#00c6ff,#0072ff)",
  },
  {
    title: "Transfers Today",
    value: "124",
    gradient: "linear-gradient(135deg,#7b2ff7,#f107a3)",
  },
  {
    title: "Assignments",
    value: "310",
    gradient: "linear-gradient(135deg,#ff9800,#ff5722)",
  },
  {
    title: "Expenditures",
    value: "89",
    gradient: "linear-gradient(135deg,#10b981,#14b8a6)",
  },
];

export default function Dashboard() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 4,
          color: "#0f172a",
        }}
      >
        Command Dashboard
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} md={3} key={card.title}>
            <Card
              sx={{
                borderRadius: 5,
                background: card.gradient,
                color: "white",
                boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
              }}
            >
              <CardContent>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 5,
              boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Asset Distribution
              </Typography>

              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={colors[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 5,
              boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Base Asset Comparison
              </Typography>

              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={barData}>
                  <XAxis dataKey="base" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="assets" fill="#7b2ff7" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card
        sx={{
          mt: 4,
          borderRadius: 5,
          boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Net Movement Details
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Assets moved across all bases today: 674 units.
          </Typography>

          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(90deg,#00c6ff,#7b2ff7,#ff9800)",
              borderRadius: 4,
              px: 4,
            }}
          >
            View Detailed Report
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}