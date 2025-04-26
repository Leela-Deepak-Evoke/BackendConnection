const express = require("express")
const dotEnv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const employeeRoutes = require("./routes/employeeRoutes")

const app = express()

const PORT = process.env.PORT || 3000

dotEnv.config()

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected Successfully!!")
    })
    .catch((error) => {
        console.log("Error: ", error)
    })

app.use('/employees', employeeRoutes)

app.listen(PORT, () => {
    console.log(`Server started and running at ${PORT}`)
})
