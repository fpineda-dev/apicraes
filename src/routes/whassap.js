const express = require("express");
const { createWhassapContact, getContactByGender } = require("../controllers/whassap");
const router = express.Router();

/**
 * Lista de contactos
 */

//TODO [GET] http://localhost:3001/whassap
router.post("/", createWhassapContact);
router.get("/:gen", getContactByGender);


module.exports = router 