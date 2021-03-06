const express = require("express");
const router = express.Router();

const { createHabitat,getAllHabitats,getHabitatById,getHabitatByName,deleteHabitat,updateHabitat} = require("../controllers/habitat.controller");

router.post("/create", createHabitat );
router.get("/allHabitat",getAllHabitats);
router.get("/:habitatId",getHabitatById);
router.get("/name/:habitatName",getHabitatByName)
router.delete("/delete",deleteHabitat)
router.put("/update",updateHabitat)

module.exports = router;