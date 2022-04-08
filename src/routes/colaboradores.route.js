const express = require('express');
const router = express.Router();

const { validId, validObjectBody } = require('../middlewares/colaborador.middleware');


const staffController = require('../controllers/colaboradores.controller');

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
