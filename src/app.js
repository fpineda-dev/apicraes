const http = require("http");
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const app = express();
require('./database');

const whiteList = ['http://localhost:3001','https://apicraes.onrender.com','https://fpineda-dev.github.io']


const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

/*undestand Ajax petition */
app.use(express.json());

const { router } = require('./routes')
app.use(cors({origin: whiteList}));
app.use("/v1", router)

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => console.log(`Api now is up ${PORT}`));