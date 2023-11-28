const express = require('express');
const router = express.Router();
const GroupController = require('../Controllers/groupController');

// Routes CRUD pour l'entité groups

// Créer un groups
router.post('/', GroupController.createGroup);

// Récupérer tous les groups
router.get('/', GroupController.getAllGroups);

// Récupérer un group
router.get('/:userId', GroupController.getGroupById);

// Mettre à jour un group
router.put('/:userId', GroupController.updateGroup);

// Supprimer un group
router.delete('/:userId', GroupController.deleteGroup);

module.exports = router;