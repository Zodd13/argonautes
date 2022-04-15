const express = require('express');
const router = express.Router();
const crewCtrl = require('../controllers/crew');

router.post('/add', crewCtrl.addMember);