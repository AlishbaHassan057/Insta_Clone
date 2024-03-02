const express = require("express");
const errorHandler = require("./middleware/errorMiddleware");
const connect = require("./config/ConnectDB");
const app = express();
require("dotenv").config();
require("colors");
const cors = require("cors");
app.use(cors());
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users/", require("./routes/userRoutes"));
app.use("/api/blogs/", require("./routes/blogRoute"));
app.use("/api/events/", require("./routes/eventRoute"));
app.use("/api/register/", require("./routes/registerRoute"));
app.use("/api/admin/", require("./routes/adminRoute"));
app.use(errorHandler);
app.listen(process.env.PORT, () =>
  console.log(`Your Server has been started on Port:${process.env.PORT.blue}`)
);
// final version
