const express = require("express");
const router = express.Router();

const { createFamily,getAllFamilies,getFamilyById,getFamilyByName,deleteFamily,updateAnimal} = require("../controllers/family.controller");

router.post("/create", createFamily );
router.get("/allFamily",getAllFamilies);
router.get("/:familyId",getFamilyById);
router.get("/name/:familyName",getFamilyByName);
router.delete("/delete",deleteFamily);
router.put("/update",updateAnimal)

module.exports = router;