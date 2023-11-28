const express = require('express');
const router = express.Router();
const AlbumController = require('../Controllers/albumController');

// Routes CRUD pour l'entité album

// Créer une album
router.post('/', AlbumController.createAlbum);

// Récupérer tous les albums
router.get('/', AlbumController.getAllAlbums);

// Récupérer un album
router.get('/:userId', AlbumController.getAlbumById);

// Mettre à jour un album
router.put('/:userId', AlbumController.updateAlbum);

// Supprimer un album
router.delete('/:userId', AlbumController.deleteAlbum);

module.exports = router;