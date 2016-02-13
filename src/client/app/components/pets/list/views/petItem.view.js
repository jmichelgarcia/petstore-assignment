var Backbone = require('backbone');
var PetModel = require('../models/pet.model');
var template = require('../templates/pet-item.hbs');

module.exports = Backbone.View.extend({
    tagName: 'tr',
    template: template,

    events: {
        'click button.delete': 'didClickDeleteButton',
        'click button.edit': 'didClickEditButton'
    },

    didClickDeleteButton: function () {
        this.trigger('petItem:delete', this.model);
    },

    didClickEditButton: function (e) {
        console.log('didClickEditButton');
        console.log('e');
        console.log(e);
    },


    render: function () {
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
        this.id = this.model.get('id');
        return this;
    }
});