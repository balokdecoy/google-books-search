import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.listen(6000, () => {
    console.log("Server running...");
})