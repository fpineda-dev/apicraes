const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    dbName: 'craesdb'    
}).then(db => console.log(`DB is connected ${db}`))
.catch(err => console.error(err)); 