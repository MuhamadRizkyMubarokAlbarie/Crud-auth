const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Riwayat_Penjualan = require('../models/riwayat_penjualanModel');

const secret = 'rahasia';

/**exports.register = (req, res) => {
  const { name, email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  const newUser = { name, email, password: hashed };

  User.create(newUser, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User registered' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) return res.status(400).json({ message: 'User not found' });

    const user = results[0];
    const match = bcrypt.compareSync(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1d' });
    res.json({ token });
  });
};**/

exports.getAll = (req, res) => {
  Riwayat_Penjualan.findAll((err, riwayat_penjualans) => {
    if (err) return res.status(500).json(err);
    res.json(riwayat_penjualans);
  });
};

exports.getOne = (req, res) => {
  Riwayat_Penjualan.findById(req.params.id, (err, riwayat_penjualans) => {
    if (err || riwayat_penjualans.length === 0) return res.status(404).json({ message: 'Riwayat Penjualan not found' });
    res.json(riwayat_penjualans[0]);
  });
};

exports.update = (req, res) => {
  Riwayat_Penjualan.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Riwayat Penjualan updated' });
  });
};

exports.remove = (req, res) => {
  Riwayat_Penjualan.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Riwayat Penjualan deleted' });
  });
};