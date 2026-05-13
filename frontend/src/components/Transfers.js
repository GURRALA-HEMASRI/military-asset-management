// src/components/Transfers.js
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
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

const steps = ["Initiated", "Approved", "In Transit", "Delivered"];

export default function Transfers() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 4, color: "#0f172a" }}
      >
        Asset Transfer Control Center
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 5,
              background:
                "linear-gradient(135deg,#f43f5e,#ec4899,#8b5cf6)",
              color: "white",
              boxShadow: "0 20px 45px rgba(0,0,0,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                Initiate Transfer
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
                label="From Base"
                sx={{ mb: 2, background: "white", borderRadius: 2 }}
              >
                <MenuItem>Alpha Base</MenuItem>
                <MenuItem>Bravo Base</MenuItem>
              </TextField>

              <TextField
                fullWidth
                select
                label="To Base"
                sx={{ mb: 3, background: "white", borderRadius: 2 }}
              >
                <MenuItem>Charlie Base</MenuItem>
                <MenuItem>Delta Base</MenuItem>
              </TextField>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: 1.5,
                  borderRadius: 4,
                  fontWeight: 700,
                  background:
                    "linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6)",
                }}
              >
                Execute Transfer
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 5,
              boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 700 }}>
                Transfer Tracking
              </Typography>

              <Stepper activeStep={2} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <Box sx={{ mt: 5 }}>
                <Typography variant="h6">
                  Current Transfer: Alpha → Charlie
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  80 Assault Rifles currently in transit.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}