const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");
const path = require("path");

router.post("/recommend", (req, res) => {
  const { query, location } = req.body;

  // Path to the Python script
  const pythonScript = path.join(__dirname, "../ai/train.py");

  // Spawn a Python process
  const pythonProcess = spawn("python", [pythonScript, query, location]);

  let dataToSend = "";
  pythonProcess.stdout.on("data", (data) => {
    dataToSend += data.toString();
  });

  pythonProcess.stderr.on("data", (error) => {
    console.error("Error:", error.toString());
  });

  pythonProcess.on("close", (code) => {
    if (code === 0) {
      try {
        const recommendations = JSON.parse(dataToSend);
        res.json({ success: true, recommendations });
      } catch (err) {
        res.status(500).json({ success: false, message: "Error parsing data" });
      }
    } else {
      res.status(500).json({ success: false, message: "Python script error" });
    }
  });
});

module.exports = router;
