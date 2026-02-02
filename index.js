const express = require("express");
const path = require("path");
const app = express();

// static file (gambar, css)
app.use(express.static("public"));

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// halaman club
app.get("/club/:name", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "club.html"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

