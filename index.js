require('dotenv').config();
const connectDB = require("./config/db");

// Connect to the database
connectDB();

const PORT = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");
const upload = require('./config/multerConfig');
const app = express();

// Import Routes
const userRoutes = require("./routes/UserRoutes");
const authRoutes = require("./routes/AuthRoutes");


// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Define Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the Nirliptah Server API");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}!`);
});
