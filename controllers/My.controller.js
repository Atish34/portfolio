const My = require("../models/My")

exports.addInfo = async (req,res) => {
    await My.create(req.body)
    res.json({messege:"info add success"})
}
exports.getInfo = async(req,res) => {
    const result = await My.find()
    res.json({messege:"info fetch success",result})
}