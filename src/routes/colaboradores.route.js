const express = require('express');
const router = express.Router();

const staffController = require('../controllers/colaboradores.controller');

router.get('/find-staff', staffController.findStaffController);

router.get('/find-colaborador/:id', staffController.findColaboradorByIdController);

router.post('/create', staffController.createColaboradorController);

router.put('/update/:id', staffController.updateColaboradorController);

router.delete('/delete/:id', staffController.deleteColaboradorController);


module.exports = router;
