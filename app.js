require("dotenv").config();
require("module-alias/register");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;

const shopRoutes = require("@/routes/shop");

app.use(cors());
app.use(bodyParser.json());

app.use("/shop", shopRoutes);

app.get("/", (_, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to shop inventory API",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
