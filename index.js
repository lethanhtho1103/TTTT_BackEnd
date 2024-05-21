const express = require("express");
const cors = require("cors");
const config = require("./app/config");

const app = express();
const PORT = config.app.port;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
