const express=require('express')
const router=express.Router()


const contactController=require('../controllers/contact')




//Get
router.get('/',contactController.getAllContactController)


// Post

router.post('/',contactController.postNewCotactController)

router.get('/:id', contactController.getSingleContatct)




  router.put('/:id',contactController.editContact)
  router.delete('/:id',contactController.deleteContact)

module.exports=router