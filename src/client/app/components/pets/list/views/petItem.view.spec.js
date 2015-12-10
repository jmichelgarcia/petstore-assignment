var Backbone = require('backbone');
var PetItemView = require('./petItem.view');

describe('Pet Item View', function() {
  describe('type', function() {
    it('should be of view', function() {
      expect(PetItemView.prototype).toEqual(jasmine.any(Backbone.View));
    });
  });
});