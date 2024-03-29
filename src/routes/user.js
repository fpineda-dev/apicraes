const express = require("express");
const { getList, getSoulByDate, createUser } = require("../controllers/user");
const { createWhassapContact } = require("../controllers/whassap");
const router = express.Router();

/**
 * Lista de usuarios
 */

//TODO [GET] http://localhost:3001/users
router.get("/", getList);
router.get("/:date", getSoulByDate);
router.post("/", createUser);
router.post("/", createWhassapContact);



module.exports = router 