const express = require("express");
const app = express()
app.use(express.json())

const cors = require("cors");
app.use(cors())

const todoRoutes = require("./routes/todos")




//here we saying  then /todo go to todo routes file
app.use("/todos", todoRoutes)
 

app.listen(7000, () => {
    console.log("server is running on port 7000")})