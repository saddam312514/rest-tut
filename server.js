const express=require('express')

const morgan=require('morgan')

const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/contacts-db')
const db=mongoose.connection

db.on('err',(err)=>{
    console.log(err);
})

db.on('open',()=>{
    console.log('Database Connection Estabalished');
})



const contactRoute=require('./api/routes/contact')
const userRouter=require('./api/routes/user')

const app=express()

app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api/contacts' ,contactRoute)
app.use('/api/users',userRouter)

const PORT=process.env.PORT || 3000




app.get('/',(req,res)=>{
    res.send('<div><h1>hellow world</h1></div>')
})

app.listen(PORT,()=>{
    console.log(`server is Running on Port ${PORT}`)
})


const contacts=[
    {
        name:'saddam',email:'saddam312514@gmail.com'
    },
    {
        name:'ruhul', email:'ruhul@gmail.com'
    }
]