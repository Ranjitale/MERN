const express = require("express");
const app = express();
require("dotenv").config();
app.use("/api/workouts", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});
const WorkoutRoutes = require("./routes/workouts");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log(`Server is listening & connected to the mongodb as well.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/workouts", WorkoutRoutes);
