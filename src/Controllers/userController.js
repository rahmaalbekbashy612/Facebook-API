const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).send('Erreur lors de la création de l\'utilisateur');
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur :', error);
    res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
    res.status(500).send('Erreur lors de la mise à jour de l\'utilisateur');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(204).send();
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur :', error);
    res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const events = await User.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Erreur lors de la récupération des users :', error);
    res.status(500).send('Erreur lors de la récupération des users');
  }
};