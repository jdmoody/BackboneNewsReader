window.NewReader.Views.FeedsIndexView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync add", this.render);
  },

  template: JST["feeds/index"],

  render: function () {
    var renderedContent = this.template({
      feeds: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "submit #submit-form": "submitFeed"
  },

  submitFeed: function (event) {
    event.preventDefault();
    var newFeed = new NewReader.Models.Feed();
    var params = $(event.currentTarget).serializeJSON().feed;
    newFeed.save(params, {
      success: function(model) {
        NewReader.Collections.feeds.add(model);
      }
    });
  }
});