const express = require("express");
const router = express.Router();

const { createAnimal,getAllAnimal,getAnimalById,getAnimalByName,deleteAnimal,updateAnimal} = require("../controllers/animal.controller");

router.post("/create", createAnimal );
router.get("/allAnimal",getAllAnimal);
router.get("/:animalId",getAnimalById);
router.get("/name/:animalName",getAnimalByName);
router.delete("/delete",deleteAnimal)
router.put("./update",updateAnimal)
module.exports = router;