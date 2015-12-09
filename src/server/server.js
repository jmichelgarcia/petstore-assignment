  var express = require('express');
  var bodyParser = require('body-parser');
  var methodOverride = require('method-override');
  var mongoose = require('mongoose');
  var PetsController = require('./controller/pets.controller');
  var port = 8000;
  var app = express();

  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json())
  app.use(methodOverride());
  app.use(express.static(__dirname + '/../client'));
  app.use(PetsController);

  mongoose.connect('mongodb://localhost/petstore_db');
  app.listen(port);