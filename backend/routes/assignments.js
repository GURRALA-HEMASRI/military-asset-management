// backend/routes/assignments.js
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
      const assignment = new Asset({
        ...req.body,
        transactionType: req.body.transactionType || "Assignment",
      });

      await assignment.save();

      res.status(201).json({
        message: "Assignment/Expenditure recorded successfully",
        data: assignment,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.get("/", verifyToken, async (req, res) => {
  try {
    const assignments = await Asset.find({
      transactionType: { $in: ["Assignment", "Expenditure"] },
    });

    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;