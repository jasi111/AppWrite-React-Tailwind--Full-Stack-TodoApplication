require ("dotenv").config();
const express = require ("express");
const app = express()
const connectToDB = require("./config/db")
const todoRoutes = require("./routes/todoRoutes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.use("/",todoRoutes);


module.exports =app;
