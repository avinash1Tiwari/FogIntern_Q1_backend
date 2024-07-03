const express = require('express')

const router = express.Router();

const {multiplayerController}  = require('../controller')


router.get('/settings',multiplayerController.settings)
router.get('/advanced',multiplayerController.advanced)
router.get('/rules',multiplayerController.rules)
router.get('/cards',multiplayerController.cards)

module.exports = router