
const security = require('../models/security'); 

const createOrganization = async (req, res) => {
    const { idorganization, organization, access_token } = req.body;
    const newOrganization = new security({ idorganization, organization, access_token })
    await newOrganization.save();
    res.json(
        {
            message: 'Organization Saved'
        }
    );
}

const updateOrganization = async (req, res) => {
    const { idorganization } = req.params;
    const {  access_token } = req.body;
    if (idorganization !== '') {
        try {
            const query = { "idorganization": idorganization };
            const update = { $set: { "access_token": access_token } };
            const options = {upsert: true};
            const updateOrg = await security.updateOne(query, update, options);
            res.json(updateOrg)
        } catch (error) {
            console.error(`unexpectation Error detail: ${error}`);
        }
        
    }
}

const getOrganizationById = async (req, res) => {
    const { idorganization } = req.params;
    if (idorganization !== '') {
        const org = await security.find({ idorganization: { $gt: idorganization } })    
        const [ { access_token } ] = org
        console.log(`Return Token ${access_token}`);   
        res.json(access_token)
    }
}

module.exports = { 
    createOrganization, 
    updateOrganization, 
    getOrganizationById
}