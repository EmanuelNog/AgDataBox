//const { response } = require('express');
const express = require ('express');
const CultureController = require('./Controllers/CultureController');
const CropController = require('./Controllers/CropController');

const routes= express.Router();

routes.post('/login', LoginController.create)
routes.get('/login', LoginController.index)
 
routes.post('/crop', CropController.create)
routes.get('/crop', CropController.index)
//routes.get('/crop:id', CropController.delete)

routes.post('/culture', CultureController.create)
routes.get('/culture', CultureController.index)

module.exports = routes;