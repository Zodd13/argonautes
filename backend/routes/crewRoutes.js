const express = require('express');
const router = express.Router();
const crewCtrl = require('../controllers/crew');

router.post('/add', crewCtrl.addMember);
router.get('/crewlist', crewCtrl.getMembers);
module.exports = router;