const express = require("express");

const app = express();

// Routes

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "hello world completed cicd automation",
  });
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
