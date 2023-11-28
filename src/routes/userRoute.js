const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/userController');

// Routes CRUD pour l'entité User

// Créer un utilisateur
router.post('/', UserController.createUser);

// Récupérer tous les utilisateurs
router.get('/', UserController.getAllUsers);

// Récupérer un utilisateur par son ID
router.get('/:userId', UserController.getUserById);

// Mettre à jour un utilisateur par son ID
router.put('/:userId', UserController.updateUser);

// Supprimer un utilisateur par son ID
router.delete('/:userId', UserController.deleteUser);

module.exports = router;