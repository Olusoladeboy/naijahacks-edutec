const express = require('express');
require('../db/mongoose')
const hbs = require('hbs')
const app = express();
const User = require('../models/user')


const port = process.env.PORT || 8081;

app.get("/", (req, res) => {
    res.status(200).send("This is the landing page and database is connected")
})

app.post("/user", async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send({ user })
    } catch (e) {
        res.status(400).send(e)
    }
})

app.listen(port, () => {
    console.log("App is running on localhost:" + port)
})