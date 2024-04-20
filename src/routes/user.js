const express = require("express");
const { getList, getSoulByDate, createUser, updateSoulStatus } = require("../controllers/user");
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
router.patch("/:id", updateSoulStatus);



module.exports = router 