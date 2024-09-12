const express = require ('express');
const router = express.Router();
const referenceControllers = require ('../controllers/referenceControllers');

router.get('', referenceControllers.getAllReferences);
router.post('', referenceControllers.createReference);

module.exports = router;