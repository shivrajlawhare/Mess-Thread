import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import cron from "node-cron";
import Review from "./models/reviewModel.js";

cron.schedule("0 0 * * *", async () => {
  try {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    await Review.deleteMany({ createdAt: { $lt: yesterday } });
    console.log("Deleted reviews older than one day.");
  } catch (error) {
    console.error("Error deleting old reviews:", error);
  }
});

import messRoutes from "./routes/messRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); // Increase the limit to 50mb
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/mess", messRoutes);
app.use("/review", reviewRoutes);

const CONNECTION_URL = "mongodb://localhost:27017/mess-thread";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
