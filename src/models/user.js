const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  name: String,
  // Ajoutez d'autres attributs utilisateur ici
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;