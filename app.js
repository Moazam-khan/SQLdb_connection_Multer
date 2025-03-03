const express = require('express');
const { dbConnection } = require('./config/dbConnect');
const fileRoutes = require('./routes/fileRoutes');
const File = require('./models/File');

const app = express();
const port = 3000;

// Connect to the database
dbConnection();

// Sync the model with the database
File.sync();

// Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/files', fileRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});