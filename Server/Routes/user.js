const express = require('express'); 
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl .signup);
router.post('/login', userCtrl .login);
router.get('/:id', auth, userCtrl .getOneAccount);
router.get('/accounts', userCtrl .getAllAccounts);
router.delete('/:id', auth, userCtrl .deleteAccount);
router.put('/:id', auth, userCtrl .modifyAccount);

module.exports = router;