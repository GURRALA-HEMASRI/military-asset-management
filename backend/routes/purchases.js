// backend/routes/purchases.js
const express = require("express");
const router = express.Router();
const Asset = require("../models/asset");
const { verifyToken, authorizeRoles } = require("../middleware/auth");

router.post(
  "/",
  verifyToken,
  authorizeRoles("Admin", "Logistics Officer"),
  async (req, res) => {
    try {
      const newPurchase = new Asset({
        ...req.body,
        transactionType: "Purchase",
      });

      await newPurchase.save();

      res.status(201).json({
        message: "Purchase recorded successfully",
        data: newPurchase,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.get("/", verifyToken, async (req, res) => {
  try {
    const purchases = await Asset.find({ transactionType: "Purchase" });
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;