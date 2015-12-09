var express = require('express'),
  router = express.Router(),
  PetModel = require('../model/pet.model');

router.get('/api/pets', function(request, response) {
  return PetModel.find(function(err, pets) {
    if (!err) {
      return response.send(pets);
    } else {
      return console.log(err);
    }
  });
});

router.get('/api/pets/:id', function(request, response) {
  return PetModel.findById(request.params.id, function(err, pet) {
    if (!err) {
      return response.send(pet);
    } else {
      console.log(err);
    }
  });
});

router.post('/api/pets', function(request, response) {
  var pet = new PetModel({
    name: request.body.name,
    status: request.body.status
  });

  pet.save(function(err) {
    if (err) {
      return console.log(err);
    }
  });

  return response.send(pet);
});

router.delete('/api/pets/:id', function(request, response) {
  return PetModel.findById(request.params.id, function(err, pet) {
    return pet.remove(function(err) {
      if (!err) {
        return response.send('');
      } else {
        console.log(err);
      }
    });
  });
});

module.exports = router;