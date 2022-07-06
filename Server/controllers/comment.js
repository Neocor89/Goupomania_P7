const fs = require('fs');
const { Comment, User } = require('../models/index');
const db = require("../models");

//: Création Commentaire
exports.createComment = (req, res, next) => {
    const comment = {
        userId: req.decodedToken.userId,
        messageId: req.body.messageId,
        content: req.body.content
    };
    console.log(req.messageId);
    Comment.create(comment)
        .then(() => res.status(201).json({ message: "Commentaire envoyée !" }))
        .catch(error => res.status(400).json({ error }));
};

//: Affichage des Commentaires 
exports.getAllComments = (req, res, next) => {
    Comment.findAll({
        include:User,
        where: { messageId: req.params.id },
    }
    )
        .then((comments) => res.status(200).json(comments))
        .catch(error => res.status(400).json({ error }));
};

//: Affichage d'un Commentaire
exports.getOneComment = (req, res, next) => {
    Comment.findOne({ where: { id: req.params.id } })
        .then((comment) => res.status(200).json(message))
        .catch(error => res.status(404).json({ error }));
};

//: Suppression d'un Commentaire 

exports.deleteComment = (req, res, next) => {
  Comment.findOne({ where: { id: req.params.id } }) 
      .then((comment) => {
        Comment.destroy({ where: { id: req.params.id } }) 
              .then(() => res.status(200).json({ message: 'Commentaire supprimé' }))
              .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};