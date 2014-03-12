window.NewReader.Views.FeedView = Backbone.View.extend({
  template: JST["feeds/show"],

  events: {
    "click #refresh-button": "refreshFeed"
  },

  refreshFeed: function () {
    var that = this;
    this.model.fetch({
      success: function () {
        that.render();
      }
    })
  },

  render: function () {
    var renderedContent = this.template({
      feed: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
})