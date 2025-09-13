const serverless = require("serverless-http");
const express = require("express");
const mailer = require('./mailer.js');

const app = express();

app.use(express.json());

app.post("/", async (req, res, next) => {
    try {
        console.log(req.body)
        const result = await mailer.sendEmail(req.body);
        console.log(result)
        return res.status(200).json({ message: "Request processed successfully.", result });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Failed (in api)" });
    }
});

exports.handler = serverless(app);