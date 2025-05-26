const db = require('../config/db');

const Riwayat_Penjualan = {
  create: (data, callback) => {
    const sql = 'INSERT INTO riwayat_penjualan SET ?';
    db.query(sql, data, callback);
  },
  findByUserId: (user_id, callback) => {
    const sql = 'SELECT * FROM riwayat_penjualan WHERE user_id = ?';
    db.query(sql, [user_id], callback);
  },
  findAll: (callback) => {
    db.query('SELECT * FROM riwayat_penjualan', callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM riwayat_penjualan WHERE id = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE riwayat_penjualan SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM riwayat_penjualan WHERE id = ?', [id], callback);
  }
};

module.exports = Riwayat_Penjualan;