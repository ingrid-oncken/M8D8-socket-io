import express from 'express'
import http from 'http'
import cors from 'cors'
import { server } from 'socket.io'

const app=express()
app.use(cors())
app.use(express.json())