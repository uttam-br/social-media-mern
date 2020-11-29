const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const morgan = require("morgan");

// db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((error) =>
    console.error(`Database connection error ${error.message}`)
  );

// middlewares
app.use(bodyParser.json());
app.use(morgan("dev"));

// routes
app.use("/", require("./routes/post"));

app.listen(process.env.PORT, () => {
  console.log(`A NodeJS API is listening on port ${process.env.PORT}`);
});
