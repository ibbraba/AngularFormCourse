const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const PORT = 3000

const app = express()

app.use(bodyParser.json())

app.use(cors())

app.get("/", function (req, res ){
    res.send("Hello World")
})

app.listen(PORT, function (){
  console.log("Server runninng on port : " + PORT)
})
