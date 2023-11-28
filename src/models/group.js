// group.model.js
const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  icon: { type: String },
  coverPhoto: { type: String },
  type: { type: String, enum: ['public', 'private', 'secret'], required: true },
  allowMembersToPost: { type: Boolean, default: true },
  allowMembersToCreateEvents: { type: Boolean, default: true },
  // Autres champs du groupe
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;