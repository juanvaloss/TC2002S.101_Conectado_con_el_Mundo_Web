const questionModel = require('../models/questionModel');

async function getQuestionById( req, res) {
    const {id} = req.params;

    try{
        const question = await questionModel.getQuestionById(id);
        res.status(200).json(question);
    }

    catch (error){
        console.log(error);
        res.status(500).send(error);s
    }
};

async function createQuestion (req, res) {
    try{
        const {question} = req.params;
        const newQuestion = await QuestionModel.createQuestion(question);
        res.status(201).json(newQuestion);
    } 
    catch (error){
        console.log(error);
    }
};

module.exports = {getQuestionById, createQuestion};