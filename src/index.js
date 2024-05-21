const express = require("express");
const cors = require("cors");

const config = require("./config");
const db = require("./utils/mongodb.util");

const app = express();
const PORT = config.app.port;

app.use(express.json());
app.use(cors());

db.connect();

app.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
