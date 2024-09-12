const {db} = require('../config/db');

const getScoreById = async (id) => {
    try {
        const query = 'SELECT promedio FROM public.score WHERE id = $1;';
        const {rows} = await db.query (query, [id]);
        return rows;
    }
    catch (error){
        console.log(error);
        throw new Error (error);
    }
};

const getAverageScore = async () => {
    const query = 'SELECT AVG(promedio) AS promedio_general FROM public.score;';
    const {rows} = await db.query(query);
    return rows;
}

const createScore = async (score) =>{
    try {
        const query = 'INSERT INTO score (promedio) VALUES ($1) returning *;';
        const {rows} = await db.query (query , [score]);
        return rows [0];
    }

    catch (error){
        console.log(error);
        throw new Error(error);
    }
};

module.exports = {getScoreById,createScore, getAverageScore};