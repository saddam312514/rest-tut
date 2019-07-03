const User=require('../models/User')
const bycrypt=require('bcrypt')

const registerController=(req,res,next)=>{
  bycrypt.hash(req.body.password,10,(err,hash)=>{
      if(err){
          res.json({
              error:err
          })
      }
     let user=new User({
         email:req.body.email,
         password:hash
     })
     user.save()
     .then(result=>{
         res.status(201).json({
             messsage:'User create Successfully',
             user:result
         })
     })
     .catch(error=>{
         res.json({
             error
         })
     })
  })
}
const loginController=(req,res,next)=>{
    let email=req.body.email
    let password=req.body.password

    User.findOne({email})
            .then(user=>{
                if(user)
                {
                    bycrypt.compare(password,user.password,(err,result)=>{
                        if(err)
                        {
                            res.json({
                                messsage: 'error Occured'
                            })
                        }
                        if(result){
                            res.json({
                                messsage:'Login Successfully'
                            })
                        }
                        else{
                            res.json({
                                messsage:'Login Failde.Password does'
                            })
                        }
                    })
                }
                else{
                    res.json({
                        messsage:'user Not Found'
                    })
                }
            })
           
}



const getAllUser=(req,res,next)=>{
    User.find()
    .then(users=>{
        res.json({
            users
        })
    })
    .catch(error=>{
        res.json({
            error
        })
    })
}

module.exports={
    registerController,
    loginController,
    getAllUser
}