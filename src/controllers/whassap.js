
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const whassap = require('../models/whassapcontact')



const createWhassapContact = async (req, res) => {
    const { gender, name, phone } = req.body;
    const newContact = new whassap({ gender, name, phone })
    await newContact.save();
    res.json(
        {
            message: 'Contact Saved'
        }
    );
}

const getContactByGender = async (req, res) => {
    const { gen } = req.params;
    console.log(`Parameter value is: ${gen}`);

   /* const string1 = gen;
    const string2 = "F"  
    
    console.log(typeof(string1));

    const compareValue = string1.localeCompare(string2)

    console.log(`Result Compare ${compareValue}`);

    if (gen === "F") {
        console.log(`Es igual`);
    }
    let maleOrFelame = "F"*/
    if (gen !== '') {
        const contact = await whassap.find({ gender: gen }) //{ $gt: gender } { $in: [maleOrFelame] }
        res.json(contact)
    }
}

module.exports = {     
    createWhassapContact, 
    getContactByGender
}

