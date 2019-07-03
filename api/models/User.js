const mongoose=require('mongoose')
const valid=require('validator')

const Schema=mongoose.Schema


const userShcema=new Schema({

    email:{
        type:String,
        trim:true,
        validate:{
            validator:(v)=>{
                return valid.isEmail(v)
            },
            message:`{VALUE } is Not an Email`
            
        }
    },
    password:String


})

const User=mongoose.model('User',userShcema)
module.exports=User