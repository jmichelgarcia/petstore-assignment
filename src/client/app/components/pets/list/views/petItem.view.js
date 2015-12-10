var Backbone = require('backbone');
var PetModel = require('../models/pet.model');
var template = require('../templates/pet-item.hbs');

module.exports = Backbone.View.extend({
  tagName: 'tr',

  template: template,

  events: {
    'click button.delete': 'didClickDeleteButton'
  },

  didClickDeleteButton: function() {
    this.trigger('petItem:delete', this.model.toJSON());
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});