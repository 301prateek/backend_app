const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Here it is!");
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
