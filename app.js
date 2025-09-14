const serverless = require("serverless-http");
const express = require("express");
const mailer = require('./mailer.js');

const app = express();

app.use(express.json());

app.post("/", async (req, res, next) => {
    try {
        const result = await mailer.sendEmail(req.body);
        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

exports.handler = serverless(app);