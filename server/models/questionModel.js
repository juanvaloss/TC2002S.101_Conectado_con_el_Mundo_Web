const {db} = require('../config/db');

const getQuestionById = async (id) => {
    try {
        const query = 'SELECT pregunta FROM question WHERE id =$1;';
        const {rows} = await db.query (query, [id]);
        return rows;
    }
    catch (error){
        console.log (error);
        throw new Error (error);
    }
};

const createQuestion = async (question) => {
    try {
        const query = 'INSERT INTO question (pregunta) VALUES ($1) returning *;';
        const {rows} = await db.query (query, [question]);
        return rows [0];
    } 
    catch (error){
        console.log (error);
        throw new Error (error);
    }
};

module.exports = {getQuestionById, createQuestion};