const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/contact", require("./route/access"));
