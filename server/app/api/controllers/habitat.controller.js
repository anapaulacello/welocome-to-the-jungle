const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");
const Habitat=require("../models/habitat.model")

const createHabitat= async (req, res, next) => {
    try {
        const newHabitat = new Habitat ();
        newHabitat.id= req.body.id;
        newHabitat.name= req.body.name;
        newHabitat.location= req.body.location;
        newHabitat.mode= req.body.mode;
        const HabitatDb= await newHabitat.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { habitat: HabitatDb }
        })
    } catch (error) {
        return next(error);  
    }
}

const getAllHabitats = async (req, res, next) => {
    try {
            const habitats = await Habitat.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { habitats: habitats }
            });
        }catch (error) {
        return next(error)
    }
}

const getHabitatById = async (req, res, next) => {
    try {
        const {habitatlId} = req.params;
        const habitatlById = await Habitat.find({id:habitatlId});
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { habitat: habitatlById }
        })
    } catch (error) {
        return next(error)
    }
}

const getHabitatByName=async (req,res,next)=>{
    try {
        const {habitatName}=req.params;
        const habitatByName=await Habitat.find({name:habitatName})
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { habitat: habitatByName }
        })
    } catch (error) {
        return next(error)
    }
}
const deleteHabitat=async (req,res,next)=>{
    try {
        const {_id}=req.body;
        await Habitat.deleteOne({_id:_id})
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { habitat: `${_id} borrado` }
        })
    } catch (error) {
        return next(error)
    }
}

const updateHabitat= async(req,res,next)=>{
    try{
        const {id}=req.body;
        const habitat=await Habitat.findOneAndUpdate({id:id},{id:id,name:req.body.name, location:req.body.location, mode:req.body.mode})
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { habitat: `${habitat.habitat} actualizado` }
            })
    }catch(err){
        return next(err)
    }
}
module.exports = { createHabitat,getAllHabitats,getHabitatById,getHabitatByName,deleteHabitat,updateHabitat};