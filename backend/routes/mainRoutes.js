const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') 

// router.get('/', homeController.getIndex)
// router.get('/agrega', homeController.getFormulario)
router.get('/dichos', homeController.getDichos)
router.get('/dichos/:id', homeController.getDicho)
router.get('/surprise-me', homeController.surpriseMe)
router.get('/cron', homeController.cron)

// router for creating dicho
router.post('/submit-dicho', homeController.submitDicho)
router.post('/dichos/:id/suggestions', homeController.postSuggestions)

module.exports = router