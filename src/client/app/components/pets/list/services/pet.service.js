var $ = require('jquery');
var _ = require('underscore');
var RSVP = require('rsvp');

module.exports = {
  allPets: function() {
    return new RSVP.Promise(function(resolve, reject) {
      $.ajax({
        url: '/api/pets',
        dataType: 'json',
        method: 'GET'
      }).done(function(response) {
        var mapped = _.map(response, function(pet) {
          return {
            id: pet._id,
            name: pet.name,
            status: pet.status
          }
        });

        resolve(mapped);
      }).fail(function(jqXHR, textStatus) {
        reject(textStatus);
      });
    });
  }
}