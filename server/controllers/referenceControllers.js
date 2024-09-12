const referenceModel = require ('../models/referenceModel');

async function getAllReferences (req, res) {
    try {
        const references = await referenceModel.getAllReferences();
        res.json(references);
    }
    catch (error){
        res.status (500).send(error);
    }
};

async function createReference (req, res) {
    try {
        const {referencia} = req.body;
        const newReference = await referenceModel.createReference(referencia);
        res.status(201).json(newReference);
    }

    catch (error) {
        console.log(error);
    }
};

module.exports = {getAllReferences, createReference};
