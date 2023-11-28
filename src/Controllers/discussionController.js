const Discussion = require('../models/discussion');

exports.createDiscussion = async (req, res) => {
  try {
    const newDiscussion = await Discussion.create(req.body);
    res.status(201).json(newDiscussion);
  } catch (error) {
    console.error('Erreur lors de la création du fil de discussion :', error);
    res.status(500).send('Erreur lors de la création du fil de discussion');
  }
};

exports.getAllDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find();
    res.status(200).json(discussions);
  } catch (error) {
    console.error('Erreur lors de la récupération des fils de discussion :', error);
    res.status  (500).send('Erreur lors de la récupération des fils de discussion');
  }
};

exports.getDiscussionById = async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.discussionId);
    if (!discussion) {
      return res.status(404).send('Fil de discussion non trouvé');
    }
    res.status(200).json(discussion);
  } catch (error) {
    console.error('Erreur lors de la récupération du fil de discussion :', error);
    res.status(500).send('Erreur lors de la récupération du fil de discussion');
  }
};

exports.updateDiscussion = async (req, res) => {
  try {
    const updatedDiscussion = await Discussion.findByIdAndUpdate(req.params.discussionId, req.body, { new: true });
    if (!updatedDiscussion) {
      return res.status(404).send('Fil de discussion non trouvé');
    }
    res.status(200).json(updatedDiscussion);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du fil de discussion :', error);
    res.status(500).send('Erreur lors de la mise à jour du fil de discussion');
  }
};

exports.deleteDiscussion = async (req, res) => {
  try {
    const deletedDiscussion = await Discussion.findByIdAndDelete(req.params.discussionId);
    if (!deletedDiscussion) {
      return res.status(404).send('Fil de discussion non trouvé');
    }
    res.status(204).send();
  } catch (error) {
    console.error('Erreur lors de la suppression du fil de discussion :', error);
    res.status(500).send('Erreur lors de la suppression du fil de discussion');
  }
};
