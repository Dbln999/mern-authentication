const express = require("express");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const authRouter = require("./authRouter");

const app = express();

app.use(express.json());
app.use("/", authRouter);
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dbln9:dbln9@cluster0.njbgh.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
