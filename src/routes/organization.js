const express = require("express");
const {  createOrganization, updateOrganization, getOrganizationById } = require("../controllers/organization");
const router = express.Router();

/**
 * Lista de contactos
 */

//TODO [GET] http://localhost:3001/organization
router.post("/", createOrganization);
router.patch("/:idorganization", updateOrganization);
router.get("/:idorganization", getOrganizationById)


module.exports = router 