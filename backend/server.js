const express =require('express')
const mongoose=require('mongoose')
const routes=require('./routes/TodoRoutes')
const cors=require('cors')


require('dotenv').config()

const app=express()
const PORT=process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))

app.listen(PORT,()=>console.log(`listen on :${PORT}`))

app.use("", routes)