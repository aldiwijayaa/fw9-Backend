const users = require('express').Router();

const userController = require('../controller/user');

users.get('/', userController.getAllUser);
users.post('/', userController.createUser);
users.patch('/:id', userController.editUser);
users.delete('/:id', userController.deleteUser);
users.get('/:id', userController.detailUser);



module.exports = users ;