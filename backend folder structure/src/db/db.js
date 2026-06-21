const mongoose = require("mongoose");
const dns = require("dns")
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://youknowfaizan_db_user:5sO6bH3FwCxcFxPl@practice-project.7pu9wwt.mongodb.net/practice"
        );

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection error:");
        console.log(error.message);
    }
};

module.exports = connectDB;