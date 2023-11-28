// discussion.model.js
const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  messages: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
    // Autres champs du message
  }],
  // Autres champs de la discussion
});

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;