const express = require('express');
const router = express.Router();
const tasksController = require('./controllers/taskscontroler');

router.get('/',tasksController.getALL);

//router.get('/',(req, res) => res.status(200).json({ message: 'foi tudo da rota ja' }));

module.exports = router;

