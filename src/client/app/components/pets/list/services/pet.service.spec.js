var RSVP = require('rsvp');
var $ = require('jquery');
var jasmineAjax = require('jasmine-ajax');
var petService = require('./pet.service');

var testResponses = {
  pets: {
    success: {
      status: 200,
      dataType: 'json',
      responseText: JSON.stringify([{
        _id: '1',
        name: 'nice doggy',
        status: 'alone'
      }, {
        _id: '2',
        name: 'nice kitty',
        status: 'alone'
      }])
    },
    error: {
      status: 500
    }
  }
};

describe('Pet Service', function() {
  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  describe('api', function() {
    describe('.allPets()', function() {
      describe('properties', function() {
        it('should be defined', function() {
          expect(petService.allPets).toEqual(jasmine.any(Function));
        });

        it('should return promise', function() {
          expect(petService.allPets()).toEqual(jasmine.any(RSVP.Promise));
        });
      });

      describe('successful response', function() {
        beforeEach(function() {
          jasmine.Ajax
            .stubRequest(/.*/)
            .andReturn(testResponses.pets.success);
        });

        it('should use proper REST url and method', function(done) {
          var testRequest = function() {
            request = jasmine.Ajax.requests.mostRecent();
            expect(request.url).toEqual('/api/pets');
            expect(request.method).toBe('GET');
          };

          petService.allPets()
            .then(testRequest)
            .catch(fail)
            .finally(done);
        });

        it('should map response to object', function(done) {
          var testRequest = function(data) {
            expect(data).toEqual([{
              id: '1',
              name: 'nice doggy',
              status: 'alone'
            }, {
              id: '2',
              name: 'nice kitty',
              status: 'alone'
            }])
          }

          petService.allPets()
            .then(testRequest)
            .catch(fail)
            .finally(done);
        });
      });
    });
  });
});