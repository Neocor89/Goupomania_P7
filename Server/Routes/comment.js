const express = require('express');
const router = express.Router();
const answerCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config'); 

//: Management des routes manipulant les commentaires 
//: Import de la sécurité via auth sur les routes à protéger

router.post('/new', auth, answerCtrl.createComment);
router.get('/:id/display', auth, answerCtrl.getAllComments);
router.get('/:id', auth, answerCtrl.getOneComment);
router.delete('/:id', auth, answerCtrl.deleteComment);

module.exports = router;