const mongoose = require("mongoose");

const retreatSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        start_date: {
            type: Date,
            required: true,
        },
        end_date: {
            type: Date,
            required: true,
        },
        price_per_person: {
            type: Number,
            required: true,
        },
        max_participants: {
            type: Number,
        },
        address: {
            type: String,
            required: false,
        },
        map_location: {
            type: String, // URL or coordinates
            required: false,
        },
        meals_info: {
            type: [String], // Array of meal options (e.g., "Vegetarian", "Vegan", etc.)
        },
        organizer: {
            type: String, // Organizer name
            required: true,
        },
        guests: [
            {
                name: { type: String, required: false }, // Guest name
                guest_photo: { type: String, required: false }, // Photo URL (Tes Purpose)
            },
        ],
        featuring_events: {
            type: [String], // Array of events (e.g., "Kirtan Night", "Nature Walk Meditation")
        },
        accommodation_id: {
            type: mongoose.Schema.Types.ObjectId, // Foreign Key
            ref: "Accommodation", // Link to the Accommodation
            required: false, // Nullable for testing purpose
        },
        instructor_id: {
            type: mongoose.Schema.Types.ObjectId, // Foreign Key
            ref: "Instructor",
            required: false, // Nullable for testing purpose
        },
        photo: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);


const Retreat = mongoose.model("Retreat", retreatSchema);
module.exports = Retreat;
