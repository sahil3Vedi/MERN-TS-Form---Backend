import express, { Application, Request, Response, NextFunction } from 'express'
const router  = express.Router()
const Form = require('../models/Form')

router.get('/',(req: Request,res: Response) => {
    return res.status(200).json({message:'We are on route Children'})
})

//register Child

router.post('/register', async (req: Request,res: Response) => {
    const {name, organisation, city, message, phone, email} = req.body
    // Create new Child
    const newForm = new Form({name, organisation, city, message, phone, email})
    //Save Child
    const savedForm = await newForm.save()
    res.status(200).json({message: "Registration Successful"})
})

module.exports = router
