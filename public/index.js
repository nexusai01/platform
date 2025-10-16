// ===========================
// PakNexusAI Node.js Server
// ===========================

const express = require("express");
const path = require("path");
const app = express();

// Serve static files (like HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Default route — serves index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Port for local testing
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ PakNexusAI server running at http://localhost:${PORT}`);
});
