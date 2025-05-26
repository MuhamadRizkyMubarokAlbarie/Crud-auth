const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const protect = require('../middleware/authMiddleware');

/**router.post('/register', userController.register);
router.post('/login', userController.login);**/
router.get('/products', protect, productsController.getAll);
router.get('/products/:id', protect, productsController.getOne);
router.put('/products/:id', protect, productsController.update);
router.delete('/products/:id', protect, productsController.remove);

module.exports = router;