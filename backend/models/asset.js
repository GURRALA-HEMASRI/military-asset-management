// backend/models/asset.js
const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
  {
    assetName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Vehicle", "Weapon", "Ammunition"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    base: {
      type: String,
      required: true,
    },
    supplier: {
      type: String,
      default: "",
    },
    assignedTo: {
      type: String,
      default: "",
    },
    transactionType: {
      type: String,
      enum: ["Purchase", "Transfer", "Assignment", "Expenditure"],
      required: true,
    },
    status: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Asset", assetSchema);