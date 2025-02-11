const { exec } = require('child_process');
const path = require('path');

exports.recommendEvents = (req, res) => {
    const { userQuery, location } = req.body;

    // Path to the AI script
    const scriptPath = path.join(__dirname, '..', 'ai', 'train.py'); 

    // Spawn a child process to execute the Python script
    const command = `python3 ${scriptPath} "${userQuery}" "${location}"`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return res.status(500).json({ error: stderr });
        }
        // Parse and send the response from the Python script
        const recommendations = JSON.parse(stdout);
        res.json(recommendations);
    });
};
