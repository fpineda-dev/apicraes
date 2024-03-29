const mentionedSchema = require('../models/mentions'); 
const  users  = require('../models/users');
const  mentionUtil = require('../utils/mentions')

const createMentiond = async (req, res) => {
    const { idmentioned, mentioned } = req.body;
    const newMentioned = new mentionedSchema({ idmentioned, mentioned })
    await newMentioned.save();
    res.json(
        {
            message: 'Mentioned Saved'
        }
    );
}

const getAllSoulVAR = async (req, res) => {
    /*Retrieve catalog mentions mentionedSchema*/
    //const mentions = await mentionedSchema.find();
    //const [{ mentioned }] = mentions 
    
    let listUser = []    
    let userFullNames = "";

   
    for (const [key, mentionVal] of Object.entries(mentionUtil)) {     
        
            const user = await users.find();
                
                for (const [key, userVal] of Object.entries(user)) {

                    if (mentionVal.idmentioned == userVal.idmentioned) {
                        console.log(`${userVal.names} ${userVal.surnames} ${mentionVal.idmentioned} ${mentionVal.mentioned}`);
                        userFullNames = `${userVal.names} ${userVal.surnames}`
                        let AllUsers = { "idmention": mentionVal.idmentioned, "fullnames": userFullNames, "mention": mentionVal.mentioned  }
                        
                        listUser.push(AllUsers);
                    }

                    
                }
        
              
        }   

    console.log(`The object ${listUser.length}`);     

    
    res.json(listUser);
}


module.exports = { 
    createMentiond,
    getAllSoulVAR
}