const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/',(req, res) => orderController.getAllResources(req, res));
router.get('/:id',(req, res) => orderController.getResource(req, res));
router.post('/',(req, res) => orderController.createResource(req, res));
router.put('/:id',(req, res) => orderController.updateResource(req, res));
router.delete('/:id',(req, res) => orderController.deleteResource(req, res));

module.exports = router;