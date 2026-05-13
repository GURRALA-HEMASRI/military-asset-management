require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("./models/user");

const purchasesRoutes = require("./routes/purchases");
const transfersRoutes = require("./routes/transfers");
const assignmentsRoutes = require("./routes/assignments");

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB Error:", err.message);
  });

app.use((req, res, next) => {
  console.log(
    `[API LOG] ${req.method} ${req.url} ${new Date().toLocaleString()}`
  );
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Military Asset Management Backend Running",
  });
});

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ username });

    if (!user) {
      const defaultUsers = {
        admin: {
          username: "admin",
          password: "admin123",
          role: "Admin",
        },

        commander: {
          username: "commander",
          password: "commander123",
          role: "Base Commander",
        },

        logistics: {
          username: "logistics",
          password: "logistics123",
          role: "Logistics Officer",
        },
      };

      if (
        defaultUsers[username] &&
        defaultUsers[username].password === password
      ) {
        const token = jwt.sign(
          {
            username,
            role: defaultUsers[username].role,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1d",
          }
        );

        return res.json({
          success: true,
          token,
          role: defaultUsers[username].role,
          username,
        });
      }

      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      success: true,
      token,
      role: user.role,
      username: user.username,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

app.use("/api/purchases", purchasesRoutes);
app.use("/api/transfers", transfersRoutes);
app.use("/api/assignments", assignmentsRoutes);

app.get("/api/dashboard", async (req, res) => {
  try {
    const Asset = require("./models/asset");

    const totalAssets = await Asset.countDocuments();

    const purchases = await Asset.countDocuments({
      transactionType: "Purchase",
    });

    const transfers = await Asset.countDocuments({
      transactionType: "Transfer",
    });

    const assignments = await Asset.countDocuments({
      transactionType: "Assignment",
    });

    const expenditures = await Asset.countDocuments({
      transactionType: "Expenditure",
    });

    res.json({
      success: true,
      totalAssets,
      purchases,
      transfers,
      assignments,
      expenditures,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});