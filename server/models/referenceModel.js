const {db} = require('../config/db');

const getAllReferences = async () => {
    const query = 'SELECT referencia FROM reference;';
    const {rows} =await db.query(query);
    return rows;
};

const createReference = async (reference) => {
    try {
        const query = 'INSERT INTO reference (referencia) VALUES ($1) returning *;';
        const {rows} = await db.query(query,[reference]);
        return rows [0];
    }
    catch(error){
        console.log(error);
        throw new Error (error);
    }
};

module.exports = {getAllReferences, createReference};