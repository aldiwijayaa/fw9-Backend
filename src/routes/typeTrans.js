const typeTrans = require('express').Router();

const typeTransController = require('../controllers/typeTrans');


typeTrans.post('/', typeTransController.createTypeTrans);
typeTrans.get('/', typeTransController.getTypeTrans);
typeTrans.get('/:id', typeTransController.detailTypeTrans);
typeTrans.patch('/:id', typeTransController.updateTypeTrans);
typeTrans.delete('/:id', typeTransController.deleteTypeTrans);




module.exports = typeTrans ;