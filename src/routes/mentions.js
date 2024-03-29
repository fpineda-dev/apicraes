const express = require("express");
const {  createMentiond, getAllSoulVAR } = require("../controllers/mentions");
const router = express.Router();

/**
 * Lista de menciones
 */

//TODO [GET] http://localhost:3001/mentions
router.post("/", createMentiond);
router.get("/", getAllSoulVAR);
//router.get("/:idorganization", getOrganizationById)


module.exports = router 