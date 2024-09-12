const express = require ('express');
const router = express.Router();
const scoreControllers = require ('../controllers/scoreControllers');

router.get ('/:id', scoreControllers.getScoreById);
router.get ('', scoreControllers.getAverageScore);

router.post('', scoreControllers.createScore);

module.exports = router;