const express = require('express');
const router = express.Router()
const Joi = require("joi");
const  { Person } =require('./models/person');
const { ObjectId } = require('mongodb');

//CREATE PERSON
router.post('/',async(req,res)=>{
        try{
            const{
                name,
                email,
                age
            }=req.body;
            
            const schema = Joi.object({
                name: Joi.string().min(3).max(30).required(),
                email:  Joi.string().min(3).max(200).required().email(),
                age: Joi.number().integer().required(),
            }) 
            const { error } = schema.validate(req.body)
            if(error) return res.status(400).send({message:error.details[0].message})
            let person = new Person({
                name,
                email,
                age
            })
            await person.save().then(()=>{
                res.status(200).send({message:"Person created successfully"})
            })
        }catch(err){
            res.status(500).send(err)
        }
    }
    )

//GET ALL PEOPLE
router.get('/people',async(req,res)=>{
    try{
        let  people=[];
        await Person.find().then((result)=>{
            result?.forEach((item)=>{
                people.push(item)
            })
            res.status(200).send({
                message:people,
            })
       })
    }catch(err){
        return res.status(500).send(err);
    }
})

//READ PERSON
router.get('/:id',(req,res)=>{
    try{
        const{
            id
        }=req.params;
        const IdIsValid = ObjectId.isValid(id);
        if(!IdIsValid) return res.status(404).send({message:"invalid Id"});
        Person.find({_id:id}).then((result)=>{
            res.status(200).send({message:result})
        })
        
    }catch(err){
        return res.status(500).send(err);
    }
})


//      UPDATE PERSON

router.put('/:id',async(req,res)=>{
    try{
        const{
            id
        }=req.params;
        const IdIsValid = ObjectId.isValid(id);
        if(!IdIsValid) return res.status(404).send({message:"invalid Id"});
        await Person
            .updateOne({_id:id},req.body)
                .then((result)=>{
                    res.status(201).send({message:"Updated sucessfully!"})
                })
    }catch(err){
        return res.status(500).send(err);
    }
})

//DELETE PERSON
router.delete('/:id',async(req,res)=>{
    try{
        const{
            id
        }=req.params;
        const IdIsValid = ObjectId.isValid(id);
        if(!IdIsValid) return res.status(404).send({message:"invalid Id"});
        await Person
            .deleteOne({_id:id})
                .then((result)=>{
                    res.status(201).send({message:"Delete successfull!"})
                })
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports = router