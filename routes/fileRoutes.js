const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const File = require('../models/File');
const router = express.Router();

router.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        const file = await File.create({
            filename: req.file.filename,
            mimetype: req.file.mimetype,
            path: req.file.path
        });
        res.send('File uploaded and saved to database successfully: ' + file.filename);
    } catch (error) {
        res.status(500).send('Error saving file to database: ' + error.message);
    }
});

module.exports = router;