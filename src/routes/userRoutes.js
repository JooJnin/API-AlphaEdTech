const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => userController.getAllResources(req, res));
router.get('/:id', (req, res) => userController.getResource(req, res));
router.post('/', (req, res) => userController.createResource(req, res));
router.put('/:id', (req, res) => userController.updateResource(req, res));
router.delete('/:id', (req, res) => userController.deleteResource(req, res));

module.exports = router;