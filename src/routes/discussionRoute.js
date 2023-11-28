const express = require('express');
const router = express.Router();
const DiscussionController = require('../Controllers/discussionController');

// Routes CRUD pour l'entité discussion

// Créer une discussions
router.post('/', DiscussionController.createDiscussion);

// Récupérer tous les discussions
router.get('/', DiscussionController.getAllDiscussions);

// Récupérer une discussion
router.get('/:userId', DiscussionController.getDiscussionById);

// Mettre à jour une discussion
router.put('/:userId', DiscussionController.updateDiscussion);

// Supprimer une discussion
router.delete('/:userId', DiscussionController.deleteDiscussion);

module.exports = router;