const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');

const PART_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@craesdb.hg9l9bp`

const DB_URI = `${PART_URI}${process.env.MONGO_URI}`

mongoose.connect(DB_URI, { //process.env.DB_URI
    useNewUrlParser: true,
    dbName: 'craesdb'    
}).then(db => console.log(`DB is connected ${db}`))
.catch(err => console.error(err)); 