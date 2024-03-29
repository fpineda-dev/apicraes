const { Schema, model } = require("mongoose");

const WhassapUser = new Schema({
    gender: { type: String },
    name: {type: String},
    phone: {type: String},
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

module.exports = model('contact', WhassapUser);