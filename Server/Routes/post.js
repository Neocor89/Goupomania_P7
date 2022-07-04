const express = require('express');
const router = express.Router();
const messageCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config'); 

// router.post('/new', auth, messageCtrl.createMessage);
router.post('/new', auth, multer, messageCtrl.createMessage);
router.get('/:id', auth, messageCtrl.getOneMessage);
router.get('/', auth, messageCtrl.getAllMessages);
router.delete('/:id', auth, messageCtrl.deleteMessage);

module.exports = router;