const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')
const admin = require('../controllers/admin')

// SUBMISSION ROUTES
router.get('/subs', adminController.getSubs)
router.get('/subs/:id', adminController.editSub)
router.post('/:id/accept-sub', adminController.acceptSub)

// DICHO ROUTES
router.get('/dichos', adminController.getDichos)
router.get('/dichos/:id', adminController.getOneDicho)
router.get('/edit-dicho/:id', adminController.getEditDichoPage)
router.post('/edit-dicho/:id/edit', adminController.editDicho)
router.post('/create-dicho', adminController.createDicho)

module.exports = router