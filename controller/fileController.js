const File = require('../models/File');

const uploadFile = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        const file = await File.create({
            filename: req.file.filename,
            mimetype: req.file.mimetype,
            path: req.file.path
        });
        res.status(200).json({ message: 'File uploaded and saved to database successfully', file });
    } catch (error) {
        res.status(500).json({ message: 'Error saving file to database', error: error.message });
    }
};

module.exports = { uploadFile };