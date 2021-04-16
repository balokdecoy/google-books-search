import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.listen(6000, () => {
    console.log("Server connected...");
    mongoose.connect(
        "mongodb+srv://balokdecoy:1234@cluster0.pesnt.mongodb.net/googlebooks?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => {
        console.log("Connected to database...")
    }).catch(error => {
        console.log(error);
    })
})