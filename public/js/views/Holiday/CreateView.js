define([
        'Backbone',
        'Underscore',
        "text!templates/Holiday/CreateTemplate.html"
    ],
    function (Backbone, _, CreateTemplate) {
        'use strict';

        var CreateView = Backbone.View.extend({
            el      : '#listTable',
            template: _.template(CreateTemplate),

            initialize: function (options) {
                this.render(options);
            },

            events: {},

            render: function (options) {
                this.$el.prepend(this.template(options));

                return this;
            }

        });

        return CreateView;
    });
