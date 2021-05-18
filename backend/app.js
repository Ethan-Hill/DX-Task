const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const PORT = process.env.PORT || 3001

const indexRouter = require("./routes/index")

const app = express()

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api", indexRouter)

app.listen(PORT, () => {
  console.clear()
  console.log(`Listening on port ${PORT}`)
})
