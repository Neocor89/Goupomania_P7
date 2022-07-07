const { Post } = require("../models/index");
const fs = require('fs');
const db = require("../models");

//: Création Post
exports.createMessage = (req, res, next) => {
  let imageUrl = null;
  if (req.file) {
    imageUrl = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
    console.log('ABCDE');
    console.log(imageUrl);
  }
  const post = {
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    url_image: imageUrl,
  };
  Post.create(post)
    .then(() => res.status(201).json({ message: "Message envoyé!" }))
    .catch((error) => res.status(400).json({ error }));
};

//Supression Post
exports.deleteMessage = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      Post.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: "Votre Post à bien été supprimé" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

// Obtention d'un message
exports.getOneMessage = (req, res, next) => {
  db.Post.findByPk(req.params.id, {
    include: [
      {
        model: db.Users,
        attributes: ["firstname", "lastname"],
      },
      {
        model: db.Comments,
        attributes: ["content"],
        include: { model: db.Users, attributes: ["firstname", "lastname"] },
      },
    ],
  })
    .then((message) => res.status(200).json(message))
    .catch((error) => res.status(404).json({ error }));
};

// Obtention des Post
exports.getAllMessages = (req, res, next) => {
  Post.findAll({
    include: ["user", "comments"],
    order: [["createdAt", "DESC"]],
  })
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json({ error }));
};

//Modifier un Post
exports.updateOnePost = (req, res, next) => {
  Post.update(
    {
      title: req.body.title,
      content: req.body.content,
      url_image: req.body.url_image,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((response) =>
      res.status(200).json({
        message: "Message bien modifié",
      })
    )
    .catch((error) => console.log("ERROR Post is not updated"));
};
