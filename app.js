require('dotenv').config();
const express = require('express');
const app = express()
const cors = require('cors');
app.use(cors()); // Mengizinkan semua origin;
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productsRoutes');
const riwayat_penjualanRoutes = require('./routes/riwayat_penjualanRoutes');
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', productsRoutes);
app.use('/api', riwayat_penjualanRoutes);
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));