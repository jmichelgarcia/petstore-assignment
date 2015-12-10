var $ = require('jquery');
var AppView = require('./components/app/views/app.view');

$('.pet-app').append(new AppView().render().el);