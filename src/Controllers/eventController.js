const Event = require('../models/event');

// Créer un nouvel événement
exports.createEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement :', error);
    res.status(500).send('Erreur lors de la création de l\'événement');
  }
};

// Récupérer tous les événements
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Erreur lors de la récupération des événements :', error);
    res.status(500).send('Erreur lors de la récupération des événements');
  }
};

// Récupérer un événement par ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).send('Événement non trouvé');
    }
    res.status(200).json(event);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'événement :', error);
    res.status(500).send('Erreur lors de la récupération de l\'événement');
  }
};

// Mettre à jour un événement par ID
exports.updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.eventId, req.body, { new: true });
    if (!updatedEvent) {
      return res.status(404).send('Événement non trouvé');
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'événement :', error);
    res.status(500).send('Erreur lors de la mise à jour de l\'événement');
  }
};

// Supprimer un événement par ID
exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.eventId);
    if (!deletedEvent) {
      return res.status(404).send('Événement non trouvé');
    }
    res.status(204).send();
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'événement :', error);
    res.status(500).send('Erreur lors de la suppression de l\'événement');
  }
};