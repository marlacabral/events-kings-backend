const express = require('express');
const router = express.Router();
const staffController = require('../controllers/colaboradores.controller');
const { validId, validObjectBody } = require('../middlewares/colaborador.middleware');

router.get('/all-staff', staffController.findStaffController);

router.get(
    '/one-colaborador/:id', 
    validId, 
    staffController.findColaboradorByIdController,
    );
router.post(
    '/create-colaborador', 
    validObjectBody,
    staffController.createColaboradorController);

router.put('/update-colaborador/:id', staffController.updateColaboradorController);

router.delete('/delete-colaborador/:id', staffController.deleteColaboradorController);


module.exports = router;
