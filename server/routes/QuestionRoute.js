const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.post('/questions', questionController.addQuestion);
router.get('/questions', questionController.getQuestions);
router.put('/questions/:id', questionController.updateQuestion);
router.delete('/questions/:id', questionController.deleteQuestion);
router.get('/questions/stats', questionController.getStats);

module.exports = router;