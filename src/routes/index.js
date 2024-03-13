const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH_ROUTER = __dirname;

//TODO user.js
const cleanFileName = (fileName) => {
    const clean = fileName.split('.').shift() // user
    return clean
}

//TODO [index.js, user.js]
fs.readdirSync(PATH_ROUTER).filter(fileName => {
     const prefixRoute = cleanFileName(fileName)
     if (prefixRoute !== "index") {
        console.log(`Uploading the route...${prefixRoute}`);
        router.use(`/${prefixRoute}`, require(`./${prefixRoute}`))  // Nombre y Ruta
     }
})

module.exports = { router }