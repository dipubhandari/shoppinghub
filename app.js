// importing modules
import path from 'path'
import express from "express";
import dbcon from "./database/dbcon.js";
import auth_route from "./routes/authentication_route.js";
import order_route from "./routes/order_route.js";
import cors from 'cors'


const app = express()
const PORT = process.env.port || '5000'
const DATABASE_URL = process.env.MONGO_URL || "mongodb+srv://dipubhandari:.ComDipu@cluster0.va8aa0b.mongodb.net/test"


app.use(express.json())

const db_con = dbcon(DATABASE_URL)

app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.use('/', auth_route)
app.use('/', order_route)


// deploy to the cyclic code

app.use(express.static(path.join(process.cwd(), '/build')))
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), "./build/index.html"))
})

// deploy code

if (db_con) {

    // listen
    app.listen(PORT, () => {
        console.log(`The db is connected and app is running`)
    })
}