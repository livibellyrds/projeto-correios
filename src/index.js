const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/cep", require("./routes/cep"))
app.use("/ship",require("./routes/ship"))



app.listen(9000, ()=>{
  console.log("Porta ok!")
})