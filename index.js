const express=require ('express')
const app=express()
const port=3050

app.use(express.json())

const configureDB=require ('./config/database')

configureDB()

const router=require('./config/route')
app.use('/',router)

app.listen(port,()=>{
    console.log('listening to port',port)
})