/*global window, document, Ghost, $, _, Backbone */
(function () {
    'use strict';
    //id:0 is used to issue PUT requests
    Ghost.Models.Settings = Ghost.TemplateModel.extend({
        url: Ghost.settings.apiRoot + '/settings/?type=blog,theme',
        id: '0'
    });

}());