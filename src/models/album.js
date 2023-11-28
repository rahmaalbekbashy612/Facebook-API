// album.model.js
const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }],
  // Autres champs de l'album
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;