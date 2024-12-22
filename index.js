require('dotenv').config();
const connectDB = require("./config/db");

// Connect to the database
connectDB();

const PORT = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors"); // Import CORS middleware
const upload = require('./config/multerConfig'); // Import Multer config
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')); // Endpoint for Image Location


// Upload Route
app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        res.status(200).json({
            message: "File uploaded successfully",
            filePath: `/uploads/${req.file.filename}`,
        });
    } else {
        res.status(400).json({ message: "File upload failed" });
    }
});

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the Nirliptah Server API");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}!`);
});
