var Backbone = require('backbone');
var PetListView = require('./petList.view');

describe('Pet List View', function() {
  describe('type', function() {
    it('should be of view', function() {
      expect(PetListView.prototype).toEqual(jasmine.any(Backbone.View));
    });
  });
});