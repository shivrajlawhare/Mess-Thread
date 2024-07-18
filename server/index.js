import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import cron from "node-cron";
import * as dotenv from "dotenv";

import Review from "./models/reviewModel.js";
import messRoutes from "./routes/messRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); // Increase the limit to 50mb
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/mess", messRoutes);
app.use("/review", reviewRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Schedule cron job with time zone

process.env.TZ = "Asia/Kolkata";
cron.schedule("0 0 * * *", async () => {
  try {
    console.log("Cron job started. Current time:", new Date());

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const result = await Review.deleteMany({ createdAt: { $lt: yesterday } });
    console.log(`Deleted ${result.deletedCount} reviews older than one day.`);
  } catch (error) {
    console.error("Error deleting old reviews:", error);
  }
}, {
  scheduled: true,
  timezone: "Asia/Kolkata" // Replace with your desired time zone
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
