const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const orderRoutes = require('./orderRoutes')

router.use('/costumer', userRoutes);
router.use('/product', productRoutes);
router.use('/order', orderRoutes);

module.exports = router;