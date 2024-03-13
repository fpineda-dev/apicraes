const express = require("express");
const { getList, createUser } = require("../controllers/user");
const router = express.Router();

/**
 * Lista de usuarios
 */

//TODO [GET] http://localhost:3001/users
router.get("/", getList);
router.post("/", createUser);


module.exports = router 