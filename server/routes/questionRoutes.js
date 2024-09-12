const express = require ('express');
const router = express.Router();
const questionControllers = require('../controllers/questionControllers');

router.get('/:id', questionControllers.getQuestionById);
router.post('/:id', questionControllers.createQuestion);

module.exports = router;

