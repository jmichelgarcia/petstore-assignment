var Backbone = require('backbone');
var template = require('../templates/pet-item.hbs');
var PetModel = require('../models/pet.model');

module.exports = Backbone.View.extend({
  tagName: 'tr',

  template: template,

  events: {
    'click button.delete': 'didClickDeleteButton'
  },

  initialize: function() {
    if (!(this.model instanceof PetModel)) {
      throw new Error('model is not of correct type');
    }
  },

  didClickDeleteButton: function(e) {
    this.trigger('petItem:delete', this.model.toJSON());
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});