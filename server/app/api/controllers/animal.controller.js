const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");
const Animal=require("../models/animal.model")

const createAnimal= async (req, res, next) => {
    try {
        const newAnimal = new Animal ();
        newAnimal.id= req.body.id;
        newAnimal.name= req.body.name;
        newAnimal.isCarnivore= req.body.isCarnivore;
        newAnimal.family= req.body.family;
        const AnimalDb= await newAnimal.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { animal: AnimalDb }
        })
        


    } catch (error) {
        return next(error);  
    }
}

const getAllAnimal = async (req, res, next) => {
    try {
            const animal = await Animal.find().populate({path:"family",populate:{path:"habitat"}})
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { animal: animal }
            });
        }catch (error) {
        return next(error)
    }
}

const getAnimalById = async (req, res, next) => {
    try {
        const { animalId} = req.params;
        const animalById = await Animal.find({id:animalId}).populate({path:"family",populate:{path:"habitat"}})
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Animal: animalById }
        })
    } catch (error) {
        return next(error)
    }
}

const getAnimalByName=async (req,res,next)=>{
    try {
        const {animalName}=req.params;
        const animalByName=await Animal.find({name:animalName}).populate({path:"family",populate:{path:"habitat"}})
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Animal: animalByName }
        })
    } catch (error) {
        return next(error)
    }
}

const deleteAnimal=async (req,res,next)=>{
    try {
        const {_id}=req.body;
        await Animal.deleteOne({_id:_id})
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { animal: `${_id} borrado` }
        })
    } catch (error) {
        return next(error)
    }
}

const updateAnimal= async(req,res,next)=>{
    try{
        const {id}=req.body;
        const animal=await Animal.findOneAndUpdate({id:id},{id:id,name:req.body.name, isCarnivore:req.body.isCarnivore, family:req.body.family})
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { animal: `${animal.animal} actualizado` }
            })
    }catch(err){
        return next(err)
    }
}


module.exports = { createAnimal,getAllAnimal,getAnimalById,getAnimalByName,deleteAnimal,updateAnimal};