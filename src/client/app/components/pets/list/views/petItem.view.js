var Backbone = require('backbone');
var PetModel = require('../models/pet.model');
var template = require('../templates/pet-item.hbs');

module.exports = Backbone.View.extend({
    tagName: 'tr',
    template: template,

    events: {
        'click button.delete': 'didClickDeleteButton',
        'dblclick label.pet.pet-name': 'didDClickPet',
        'dblclick label.pet.pet-status': 'didDClickPet',
        'keypress .pet-entry input': 'updateOnEnter',
        'keydown .pet-entry input': 'revertOnEscape',
        'blur .pet-entry input': 'close'

    },

    didClickDeleteButton: function () {
        this.trigger('petItem:delete', this.model);
    },

    didDClickPet: function (e) {
        console.log('petItem.view.js - didDClickPet');
        this.toggle();
        $(e.currentTarget).parent().find('input').focus();
    },

    toggle : function(){
        this.$el.toggleClass('edit');
    },

    revertOnEscape: function (e) {
        // 27 == ESC_KEY
        if (e.which === 27) {
            this.toggle();
        }
    },

    updateOnEnter: function (e)
    {
        if (e.which === 13) {
            this.close();
        }
    },

    close: function (e) {
        if (!this.$el.hasClass('edit')) {
            return;
        }
        var pet_name = this.$el.find('.pet-entry input.pet-name').val().trim();
        var pet_status = this.$el.find('.pet-entry input.pet-status').val().trim();
        this.trigger('petItem:edit', { id: this.id, name: pet_name, status: pet_status });
        this.toggle();
    },

    render: function () {
        console.log('petItem.view.js - render');
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
        this.id = this.model.get('id');
        return this;
    }
});