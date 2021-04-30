const express = require("express")
const router = express.Router()
const Correios= require("node-correios")
const correios = new Correios()

router.post('/', (req, res) =>{

    correios.calcPreco(req.body).then(result => {
      return res.json(result)
    }).catch(error =>{
      console.log("erro:", error)
    })
})


module.exports= router