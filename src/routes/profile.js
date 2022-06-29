const profile = require('express').Router();

const profielController = require('../controller/profile');

profile.get('/:id', profielController.detailProfile);
profile.post('/', profielController.createProfile);
profile.patch('/:id', profielController.updateProfile);
profile.delete('/:id', profielController.deleteProfile);
profile.get('/', profielController.getAllProfile);



module.exports = profile ;