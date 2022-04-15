const express = require('express');
const router = express.Router();
const crewCtrl = require('../controllers/crew');

router.post('/add', crewCtrl.addMember);
router.get('/crewlist', crewCtrl.getMembers);
router.delete('/delete/:id', crewCtrl.deleteMember);
module.exports = router;