const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId, // Primary Key
            auto: true,
        },
        name: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: false,
            default: null,
            minlength: 8,
        },
        profile_picture: {
            type: String,
            required: false,
        },
        role: {
            type: String,
            enum: ["student", "instructor", "admin"], // Role options
            default: "student",
        },
        dob: {
            type: Date,
            default: Date.now,
            required: false,
        },
        gender: {
            type: String,
            enum: ["male", "female", "other"],
            default: null,
        },
        medical_conditions: {
            type: [String], // Array of medical conditions
            required: false,
        },
        status: {
            type: String,
            default: "pending" },
        otp: {
            type: String },
        otpExpiry: {
            type: Date }, // OTP expiry field
        enrolled_courses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Workshop",
                default: null,
            },
        ],
        subscribed_courses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "OnlineCourse",
                default: null,
            },
        ],
        payments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Payment",
                default: null,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
