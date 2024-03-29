const { Schema, model } = require("mongoose");

const SecuritySchema = new Schema({   
    idorganization: { type: String, require: true },
    organization: { type: String},
    access_token: {type: String},
    created: { type: Date, default: Date.now },
    updated: {type: Date, default: Date.now},
});

module.exports = model('security', SecuritySchema);