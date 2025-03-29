require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const queryRoutes = require("./src/routes/queryRoutes");
const { initDB } = require("./src/database/initDB");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Initialize in-memory SQLite database
initDB();

app.use("/api", queryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
