const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', (req, res) => productController.getAllResources(req, res));
router.get('/:id', (req, res) =>productController.getResource(req, res));
router.post('/',(req, res) => productController.createResource(req, res));
router.put('/:id',(req, res) => productController.updateResource(req, res));
router.delete('/:id',(req, res) => productController.deleteResource(req, res));

module.exports = router;