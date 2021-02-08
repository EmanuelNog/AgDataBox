const express = require ('express');
const CultureController = require('./Controllers/CultureController');
const CropController = require('./Controllers/CropController');
const UserController = require('./Controllers/UserController');
const SessionController = require('./Controllers/SessionController');

const routes= express.Router();


routes.post('/login', SessionController.create)
//routes.get('/login', SessionController.index)
 
routes.post('/crop', CropController.create)
routes.get('/crop', CropController.index)
routes.delete('/crop/:id', CropController.delete)

routes.post('/culture', CultureController.create)
routes.get('/culture', CultureController.index)


module.exports = routes;