const express = require('express');
const errorHandler = require('./middleware/errorMiddleware');
const connect = require('./config/ConnectDB');
const app = express();
require('dotenv').config();
require('colors');
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/api/user', require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(process.env.PORT, () => console.log(`Your Server has been started on Port:${process.env.PORT.blue}`))
// final version