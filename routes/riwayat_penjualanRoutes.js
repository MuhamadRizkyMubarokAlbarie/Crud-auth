const express = require('express');
const router = express.Router();
const riwayat_penjualanController = require('../controllers/riwayat_penjualanController');
const protect = require('../middleware/authMiddleware');

/**router.post('/register', userController.register);
router.post('/login', userController.login);**/
router.get('/riwayat_penjualan', protect, riwayat_penjualanController.getAll);
router.get('/riwayat_penjualan/:id', protect, riwayat_penjualanController.getOne);
router.put('/riwayat_penjualan/:id', protect, riwayat_penjualanController.update);
router.delete('/riwayat_penjualan/:id', protect, riwayat_penjualanController.remove);

module.exports = router;