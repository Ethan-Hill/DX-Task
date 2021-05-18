var express = require("express")
var router = express.Router()

router.get("/", function (req, res, next) {
  res.json({ message: "Index API endpoint" })
})

module.exports = router
