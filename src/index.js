const express = require("express");

const {register,login} = require("./controllers/usercontroller")


const app = express();
app.use(express.json())

app.use("/register",register)
app.use("/login",login)

module.export = app;