const express = require("express");
const server = express();
const db = require("./knex/knex.js");
const bodyParser = require("body-parser");
const cors = require("cors");
server.use(bodyParser.json());
server.use(cors());


server.get("/", (req, res) => {
    res.send("Code: 200");
});

//get all users
server.get("/users", async(req, res) => {

    try {
        const response = await db.select().from("users");
        res.status(200).json(response)
    }
    catch (e) {
        res.status(500).json(e);
    }
});

//get single user
server.get("/user/:id", async(req, res) =>{
    const {id} = req.params;
    try{
        const response = await db("users").where("id", id);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});

//Post new user
server.post("/user", async(req, res) => {
    let userInfo = req.body;
    db("users").insert(userInfo).then((user) => {
        res.status(201).json(userInfo);
    }).catch((error) => res.status(500).json(error))
});

//Update user
//Put
server.put("/user/:id", async(req, res) => {
    const {id} = req.params;

    let userInfo = req.body;
    try {
        const response = await db("users").where({id: id}).update(userInfo);
        res.status(201).json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});

//Delete, similar to get one user
server.delete("/user/:id", async (req, res) => {
    const {id} = req.params;
    try{
        const response = await db("users").where("id", id).del();
        res.status(200).json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});


server.listen(5000, () => {
    console.log('Server is runnin on port 5000')
});


