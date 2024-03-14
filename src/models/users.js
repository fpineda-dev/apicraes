const { Decimal128 } = require('mongodb');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    idmentioned: { type: BigInt, default: 4 },    
    names: { type: String, required: true },         
    surnames: { type: String, required: true },        
    telephone: { type: Decimal128, default: 0 },
    petition: { type: String },      
    baptized: { type: Boolean },        
    status_: { type: Boolean },          
    created: { type: Date, default: Date.now },         
    updated: { type: Date, default: Date.now }, 
 });

 BigInt.prototype.toJSON = function(){ return this.toString() }
 Decimal128.prototype.toJSON = function(){ return this.toString() }

module.exports = model('users', UserSchema);