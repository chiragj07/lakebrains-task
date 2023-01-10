const {Router} = require('express');
const {protect} = require('../middleware/authMiddleware');
const router = Router();
const {registerUser, loginUser} = require('../controllers/userControllers');
router.post('/login', loginUser);
router.post('/register',registerUser);

module.exports = router