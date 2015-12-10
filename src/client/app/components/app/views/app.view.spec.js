var Backbone = require('backbone');
var AppView = require('./app.view');

describe('App View', function() {
  describe('type', function() {
    it('should be of view', function() {
      expect(AppView.prototype).toEqual(jasmine.any(Backbone.View));
    });
  });
});