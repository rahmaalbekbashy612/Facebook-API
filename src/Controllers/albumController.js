const Album = require('../models/album');

exports.createAlbum = async (req, res) => {
  try {
    const newAlbum = await Album.create(req.body);
    res.status(201).json(newAlbum);
  } catch (error) {
    console.error('Erreur lors de la création de l\'album photo :', error);
    res.status(500).send('Erreur lors de la création de l\'album photo');
  }
};

exports.getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    res.status(200).json(albums);
  } catch (error) {
    console.error('Erreur lors de la récupération des albums :', error);
    res.status(500).send('Erreur lors de la récupération des albums');
  }
};

exports.getAlbumById = async (req, res) => {
  try {
    const album = await Album.findById(req.params.albumId);
    if (!album) {
      return res.status(404).send('Album photo non trouvé');
    }
    res.status(200).json(album);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'album photo :', error);
    res.status(500).send('Erreur lors de la récupération de l\'album photo');
  }
};

exports.updateAlbum = async (req, res) => {
  try {
    const updatedAlbum = await Album.findByIdAndUpdate(req.params.albumId, req.body, { new: true });
    if (!updatedAlbum) {
      return res.status(404).send('Album photo non trouvé');
    }
    res.status(200).json(updatedAlbum);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'album photo :', error);
    res.status(500).send('Erreur lors de la mise à jour de l\'album photo');
  }
};

exports.deleteAlbum = async (req, res) => {
  try {
    const deletedAlbum = await Album.findByIdAndDelete(req.params.albumId);
    if (!deletedAlbum) {
      return res.status(404).send('Album photo non trouvé');
    }
    res.status(204).send();
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'album photo :', error);
    res.status(500).send('Erreur lors de la suppression de l\'album photo');
  }
};