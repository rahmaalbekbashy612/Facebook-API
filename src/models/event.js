// event.model.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  location: { type: String, required: true },
  coverPhoto: { type: String },
  isPrivate: { type: Boolean, default: false },
  organizers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  // Autres champs de l'événement
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;