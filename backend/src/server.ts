import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as dotenv from 'dotenv'
import routers from './routers'

const app = express()
dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(routers)

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}!`)
})