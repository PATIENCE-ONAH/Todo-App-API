const mongoose = require("mongoose");
const  dotenv = require("dotenv");
dotenv.config()

exports.connectDb = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URL);

        console.log("\nConnected to database successfully\n");
    } catch (error) {
        console.error("Failed to connect to database: ", error);
        process.exit(1);
    }
};
