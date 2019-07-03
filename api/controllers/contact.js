const Contact=require('../models/Contact')


const getAllContactController=(req,res,next)=>{

    Contact.find()
.then(contacts=>{
    res.status(200).json({
        message:'all contact',
        contacts
    })
})
.catch(err=>{
    console.log(err)
    res.status(500).json({
        message: 'Error Occured',
        error:err
        
    })
})
}

const postNewCotactController=(req,res,next)=>{
    const contact=new Contact({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    })
    contact.save()
    .then(data=>{
        res.status(201).json({
            message:'contact saved',
            contact: data
        })
    })
    .catch(err=>console.log(err))
}

const getSingleContatct=(req,res,next)=>{
    let id=req.params.id
   Contact.findById(id)
   .then(contact=>{
       res.status(200).json({
           contact
       })
   })
   .catch(err=>{
    console.log(err)
    res.status(500).json({
        message: 'Error Occured',
        error:err
        
    })
})
}

const deleteContact = (req,res,next)=>{
let id=req.params.id
Contact.findByIdAndRemove(id)
.then(result=>{
    res.json({
        message:'Contact Delete',
        result
    })
})
.catch(err=>{
    console.log(err)
    res.status(500).json({
        message: 'Error Occured',
        error:err
        
    })
})
}

const editContact=(req,res,next)=>{
    let id=req.params.id

    let updatContact={
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    }

    Contact.findByIdAndUpdate(id,{$set:updatContact})
    .then(contact=>{

        Contact.findById(contact.id)
        .then(newContact=>{
            res.json({
                message:'Udated Successfully',
                contact
            })
        })

        
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message: 'Error Occured',
            error:err
            
        })
    })
}


module.exports={
    getAllContactController,
    postNewCotactController,
    getSingleContatct,
    deleteContact,
    editContact
}