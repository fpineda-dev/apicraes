/*
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newBook = new Book({title, author, isbn, imagePath})
    await newBook.save();
    res.json(
        {
            message: 'Book Saved'
        }
    );
*/

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const  users  = require('../models/users');


const getList = async (req, res) =>{
    //res.send({data: 1})    
    const user = await users.find();
    res.json(user);

}

const createUser = async (req, res) =>{
    const { names, surnames, telephone, petition } = req.body;
    console.log(`Return Body Nombre ${names}`);
    const newUser = new users({names, surnames, telephone, petition})
    await newUser.save();
    res.json(
        {
            message: 'User Saved'
        }
    );
}

module.exports = { getList, createUser }

