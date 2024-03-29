const { Schema, model } = require("mongoose");


const UserMentionsSchema = new Schema({
    idmentioned: {type: BigInt},
    mentioned: {type: String},
});

BigInt.prototype.toJSON = function(){ return this.toString() }

module.exports = model('mentions', UserMentionsSchema);