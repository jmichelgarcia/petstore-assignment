var Backbone = require('backbone');
var PetFormView = require('./petForm.view');

describe('Pet Form View', function() {
  describe('type', function() {
    it('should be of view', function() {
      expect(PetFormView.prototype).toEqual(jasmine.any(Backbone.View));
    });
  });
});