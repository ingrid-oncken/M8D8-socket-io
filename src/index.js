import express from 'express'
import http from 'http'
import cors from 'cors'
import { server } from 'socket.io'

const app=express()
app.use(cors())
app.use(express.json())

const http = http.createServer(app)

httpServer.listen(3030, ()=>{
  console.log("Server is listening on Port 3030")
}) 