const { addInfo, getInfo } = require("../controllers/My.controller")

const router = require("express").Router()

router
    .post("/email",addInfo)
    .get("/history",getInfo)
    
module.exports = router
