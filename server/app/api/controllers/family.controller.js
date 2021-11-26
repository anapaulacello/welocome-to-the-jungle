const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");
const Family=require("../models/family.model")

const createFamily= async (req, res, next) => {
    try {
        const newFamily = new Family ();
        newFamily.id= req.body.id;
        newFamily.name= req.body.name;
        newFamily.livingInGroup= req.body.livingInGroup;
        newFamily.habitat= req.body.habitat;
        const FamilyDb= await newFamily.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { family: FamilyDb }
        })
        


    } catch (error) {
        return next(error);  
    }
}

const getAllFamilies = async (req, res, next) => {
    try {
            const families = await Family.find().populate("habitat");
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { families: families }
            });
        }catch (error) {
        return next(error)
    }
}

const getFamilyById = async (req, res, next) => {
    try {
        const { familylId} = req.params;
        const familylById = await Family.find({id:familylId});
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { family: familylById }
        })
    } catch (error) {
        return next(error)
    }
}

const getFamilyByName=async (req,res,next)=>{
    try {
        const {familyName}=req.params;
        const familyByName=await Family.find({name:familyName})
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { family: familyByName }
        })
    } catch (error) {
        return next(error)
    }
}

const deleteFamily=async (req,res,next)=>{
    try {
        const {_id}=req.body;
        await Family.deleteOne({_id:_id})
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { family: `${_id} borrado` }
        })
    } catch (error) {
        return next(error)
    }
}

const updateAnimal= async(req,res,next)=>{
    try{
        const {id}=req.body;
        const family=await Family.findOneAndUpdate({id:id},{id:id,name:req.body.name, livingInGroup:req.body.livingInGroup, habitat:req.body.habitat})
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { family: `${family.family} actualizado` }
            })
    }catch(err){
        return next(err)
    }
}

module.exports = { createFamily,getAllFamilies,getFamilyById,getFamilyByName,deleteFamily,updateAnimal};