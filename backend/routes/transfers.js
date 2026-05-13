// backend/routes/transfers.js
const express = require("express");
const router = express.Router();
const Asset = require("../models/asset");
const { verifyToken, authorizeRoles } = require("../middleware/auth");

router.post(
  "/",
  verifyToken,
  authorizeRoles("Admin", "Base Commander"),
  async (req, res) => {
    try {
      const transfer = new Asset({
        ...req.body,
        transactionType: "Transfer",
      });

      await transfer.save();

      res.status(201).json({
        message: "Transfer completed successfully",
        data: transfer,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.get("/", verifyToken, async (req, res) => {
  try {
    const transfers = await Asset.find({ transactionType: "Transfer" });
    res.json(transfers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;