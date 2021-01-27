import express, { Request, Response } from 'express'
// import { Mongoose, connect } from 'mongoose'
// import bodyParser from 'body-parser'
import path from 'path'
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || 'localhost'
const NODE_ENV = process.env.NODE_ENV || 'unset'

// Obtain Environment Configs
const app: express.Application = express();


//Connecct to Mongo Database
// import {mongoURI, dbName, userName} from './config/db'
// connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
//   .then(() => console.log(`Connected to Mongo Databace ${dbName} as ${userName}`))
//   .catch((err: Error) => console.log(err));

//Import Routes/Routers
// import authRouter from './routes/auth.router'

// Mount routers
// app.use('/api/v1/auth', authRouter)

// Mount Middlewares
// the __dirname is the current directory from where the script is running
// app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname,'../', 'client', 'build')))

app.get('/ping', (req:express.Request, res: express.Response)=>{
    res.send({msg: 'pong', success: true})
})

// Serve The Client Side React App
app.get('/*', (req: express.Request, res: express.Response)=>{
    let clientAppPath = path.resolve(__dirname,'../', 'client', 'build', 'index.html')
    res.sendFile(clientAppPath)
    console.log(`sending ${clientAppPath}`)
})

// Open a Port
app.listen(PORT, ()=>{
    console.log(`The project is running on http://${HOST}:${PORT}`)
    console.log(`The Project is running in ${NODE_ENV} mode.`)
})