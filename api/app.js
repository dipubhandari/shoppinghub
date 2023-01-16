// importing modules
import express from "express";
import dbcon from "./dbcon/dbcon.js";
import router from "./routes/authentication_route.js";
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()
const PORT = '5000'
const DATABASE_URL = process.env.PORT || "mongodb+srv://dipubhandari:.ComDipu@cluster0.va8aa0b.mongodb.net/test" || "mongodb://localhost:27017"


app.use(express.json())
dbcon(DATABASE_URL)

app.use(cors())
 
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

// listen
app.listen(PORT, () => {
})