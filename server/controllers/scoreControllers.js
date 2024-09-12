scoreModel = require ('../models/scoreModel');

async function getScoreById (req, res) {
    const {id} = req.params;

    try {
        const score = await scoreModel.getScoreById(id);
        res.status(200).json(score);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
};

async function createScore (req, res) {
    try{
        const {score} = req.body;
        console.log (req.body);
        const newScore = await scoreModel.createScore(score);
        console.log (newScore);
        res.status(201).json(newScore);
    }
    catch (error){
        console.log(error);
    }
};

async function getAverageScore (req, res){
    try {
        const avgScore = await scoreModel.getAverageScore();
        res.status(200).json(avgScore);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
};

module.exports = {getScoreById, getAverageScore, createScore};