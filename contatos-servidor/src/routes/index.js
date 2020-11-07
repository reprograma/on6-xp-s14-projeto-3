const express = require("express")
const router = express.Router()

router.get("/", function(request, response){
    response.status(200).send({
        titulo: "Agenda de contatinhos - Reprograma",
        version: "1.0.0"
    })
})

module.exports = router