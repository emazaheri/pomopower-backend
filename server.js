require("dotenv").config();
const express = require("express");

const app = express();

require("./api/startup/routes")(app);
require("./api/startup/db")();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app listening on port ${port}...!`);
});

module.exports = app;
