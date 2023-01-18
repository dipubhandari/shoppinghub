// importing modules
import express from "express";
import dbcon from "./database/dbcon.js";
import auth_route from "./routes/authentication_route.js";
import order_route from "./routes/order_route.js";
import cors from 'cors'


const app = express()
const PORT = '5000'
const DATABASE_URL = process.env.PORT || "mongodb+srv://dipubhandari:.ComDipu@cluster0.va8aa0b.mongodb.net/test"


app.use(express.json())

dbcon(DATABASE_URL)

app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.use('/', auth_route)
app.use('/', order_route)

// listen
app.listen(PORT, () => {
})