const express = require ('express');
const CultureController = require('./Controllers/CultureController');
const CropController = require('./Controllers/CropController');
const UserController = require('./Controllers/UserController');

const routes= express.Router();

routes.post('/login', UserController.create)
routes.get('/login', UserController.index)
 
routes.post('/crop', CropController.create)
routes.get('/crop', CropController.index)
routes.get('/crop:id', CropController.delete)

routes.post('/culture', CultureController.create)
routes.get('/culture', CultureController.index)


module.exports = routes;