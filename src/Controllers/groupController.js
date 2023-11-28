const Group = require('../models/group');

exports.createGroup = async (req, res) => {
  try {
    const newGroup = await Group.create(req.body);
    res.status(201).json(newGroup);
  } catch (error) {
    console.error('Erreur lors de la création du groupe :', error);
    res.status(500).send('Erreur lors de la création du groupe');
  }
};

exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (error) {
    console.error('Erreur lors de la récupération des groupes :', error);
    res.status(500).send('Erreur lors de la récupération des groupes');
  }
};

exports.getGroupById = async (req, res) => {
  try {
    const group = await Group.findById(req.params.groupId);
    if (!group) {
      return res.status(404).send('Groupe non trouvé');
    }
    res.status(200).json(group);
  } catch (error) {
    console.error('Erreur lors de la récupération du groupe :', error);
    res.status(500).send('Erreur lors de la récupération du groupe');
  }
};

exports.updateGroup = async (req, res) => {
  try {
    const updatedGroup = await Group.findByIdAndUpdate(req.params.groupId, req.body, { new: true });
    if (!updatedGroup) {
      return res.status(404).send('Groupe non trouvé');
    }
    res.status(200).json(updatedGroup);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du groupe :', error);
    res.status(500).send('Erreur lors de la mise à jour du groupe');
  }
};

exports.deleteGroup = async (req, res) => {
  try {
    const deletedGroup = await Group.findByIdAndDelete(req.params.groupId);
    if (!deletedGroup) {
      return res.status(404).send('Groupe non trouvé');
    }
    res.status(204).send();
  } catch (error) {
    console.error('Erreur lors de la suppression du groupe :', error);
    res.status(500).send('Erreur lors de la suppression du groupe');
  }
};