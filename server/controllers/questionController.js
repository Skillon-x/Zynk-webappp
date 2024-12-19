// controllers/questionController.js
const Question = require('../models/Question');

const questionController = {
  // Add a new unknown question
  async addQuestion(req, res) {
    try {
      const { question, category } = req.body;
        console.log(question)
      // Check if question already exists
      let existingQuestion = await Question.findOne({ 
        question: { $regex: new RegExp(question, 'i') } 
      });

      if (existingQuestion) {
        // Increment frequency if question exists
        existingQuestion.frequency += 1;
        await existingQuestion.save();
        return res.status(200).json(existingQuestion);
      }

      // Create new question if it doesn't exist
      const newQuestion = new Question({
        question,
        category: category || 'other'
      });

      await newQuestion.save();
      res.status(201).json(newQuestion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get all questions with optional filters
  async getQuestions(req, res) {
    try {
      const { status, category, search } = req.query;
      const query = {};

      if (status) query.status = status;
      if (category) query.category = category;
      if (search) query.$text = { $search: search };

      const questions = await Question.find(query)
        .sort({ frequency: -1, createdAt: -1 });

      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a question with an answer
  async updateQuestion(req, res) {
    try {
      const { id } = req.params;
      const { answer, status, category } = req.body;

      const question = await Question.findByIdAndUpdate(
        id,
        {
          answer,
          status,
          category,
          updatedAt: Date.now()
        },
        { new: true }
      );

      if (!question) {
        return res.status(404).json({ error: 'Question not found' });
      }

      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a question
  async deleteQuestion(req, res) {
    try {
      const { id } = req.params;
      const question = await Question.findByIdAndDelete(id);

      if (!question) {
        return res.status(404).json({ error: 'Question not found' });
      }

      res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get statistics about questions
  async getStats(req, res) {
    try {
      const stats = await Question.aggregate([
        {
          $group: {
            _id: null,
            totalQuestions: { $sum: 1 },
            pendingQuestions: {
              $sum: { $cond: [{ $eq: ['$status', 'pending'] }, 1, 0] }
            },
            answeredQuestions: {
              $sum: { $cond: [{ $eq: ['$status', 'answered'] }, 1, 0] }
            },
            totalFrequency: { $sum: '$frequency' }
          }
        }
      ]);

      res.status(200).json(stats[0] || {
        totalQuestions: 0,
        pendingQuestions: 0,
        answeredQuestions: 0,
        totalFrequency: 0
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = questionController;
