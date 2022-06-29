const trans = require('express').Router();

const transController = require('../controller/transaction');



trans.patch('/:id', transController.updateTrans);
trans.delete('/:id', transController.deleteTrans);
trans.get('/', transController.getAllTrans);
trans.get('/:id', transController.detailTrans);
trans.post('/', transController.createTrans);


module.exports = trans ;