var service = require('./components/pets/list/services/pet.service');

service.allPets().then(function(pets) {
  console.log(pets);
})