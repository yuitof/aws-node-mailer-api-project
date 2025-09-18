const serverless = require("serverless-http");
const express = require("express");
const mailer = require('./mailer/mailer.js');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    const authHeader = req.headers["authorization"]

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const credentials = authHeader.split(" ")[1];

    if (credentials == process.env.API_KEY) {
        return next();
    }

    return res.status(401).json({ message: "Invalid credentials" });
});

app.post("/", async (req, res, next) => {
    try {
        const result = await mailer.sendConfirmationMail(req.body);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({name: 'Error', message: 'Internal server error'});
    }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

exports.handler = serverless(app);