const express = require("express")
const router = express.Router()
const Correios= require("node-correios")
const correios = new Correios()

router.post('/', (req, res) =>{

    correios.consultaCEP({cep: req.body.cep}).then(result => {
      return res.json(result)
    }).catch(error =>{
      console.log("erro:", error)
    })
})


module.exports= router