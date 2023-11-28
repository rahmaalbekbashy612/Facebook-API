const express = require('express');
const router = express.Router();
const EventController = require('../Controllers/eventController');

// Routes CRUD pour l'entité event

// Créer un evenement
router.post('/', EventController.createEvent);

// Récupérer tous les evenement
router.get('/', EventController.getAllEvents);


router.get('/:userId', EventController.getEventById);


router.put('/:userId', EventController.updateEvent);

router.delete('/:userId', EventController.deleteEvent);

module.exports = router;