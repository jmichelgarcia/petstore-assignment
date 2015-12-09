var service = require('./services/pet.service');

service.allPets().then(function(pets) {
  console.log(pets);
})