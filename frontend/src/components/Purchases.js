// src/components/Purchases.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";

export default function Purchases() {
  const [form, setForm] = useState({
    asset: "",
    category: "",
    quantity: "",
    supplier: "",
    base: "",
  });

  const purchases = [
    {
      asset: "Humvee",
      category: "Vehicle",
      quantity: 12,
      supplier: "Defense Motors",
      base: "Alpha Base",
      status: "Delivered",
    },
    {
      asset: "Assault Rifle",
      category: "Weapon",
      quantity: 150,
      supplier: "Armex Corp",
      base: "Bravo Base",
      status: "Pending",
    },
    {
      asset: "5.56 Ammo",
      category: "Ammunition",
      quantity: 5000,
      supplier: "AmmoTech",
      base: "Charlie Base",
      status: "Delivered",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 4, color: "#0f172a" }}
      >
        Asset Purchases Management
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              borderRadius: 5,
              background:
                "linear-gradient(135deg,#0ea5e9 0%, #6366f1 50%, #8b5cf6 100%)",
              color: "white",
              boxShadow: "0 20px 45px rgba(0,0,0,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                New Purchase Entry
              </Typography>

              <TextField
                fullWidth
                label="Asset Name"
                name="asset"
                onChange={handleChange}
                sx={{ mb: 2, background: "white", borderRadius: 2 }}
              />

              <TextField
                fullWidth
                select
                label="Category"
                name="category"
                onChange={handleChange}
                sx={{ mb: 2, background: "white", borderRadius: 2 }}
              >
                <MenuItem value="Vehicle">Vehicle</MenuItem>
                <MenuItem value="Weapon">Weapon</MenuItem>
                <MenuItem value="Ammunition">Ammunition</MenuItem>
              </TextField>

              <TextField
                fullWidth
                label="Quantity"
                name="quantity"
                onChange={handleChange}
                sx={{ mb: 2, background: "white", borderRadius: 2 }}
              />

              <TextField
                fullWidth
                label="Supplier"
                name="supplier"
                onChange={handleChange}
                sx={{ mb: 2, background: "white", borderRadius: 2 }}
              />

              <TextField
                fullWidth
                label="Base"
                name="base"
                onChange={handleChange}
                sx={{ mb: 3, background: "white", borderRadius: 2 }}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: 1.5,
                  fontWeight: 700,
                  borderRadius: 4,
                  background:
                    "linear-gradient(90deg,#22c55e,#06b6d4,#3b82f6)",
                }}
              >
                Submit Purchase
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
                Recent Purchases
              </Typography>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><b>Asset</b></TableCell>
                    <TableCell><b>Category</b></TableCell>
                    <TableCell><b>Quantity</b></TableCell>
                    <TableCell><b>Supplier</b></TableCell>
                    <TableCell><b>Status</b></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {purchases.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.asset}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.supplier}</TableCell>
                      <TableCell>
                        <Chip
                          label={item.status}
                          color={
                            item.status === "Delivered"
                              ? "success"
                              : "warning"
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}