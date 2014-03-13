window.NewReader.Views.FeedView = Backbone.View.extend({
  initialize: function (options){
    this.listenTo(this.model, "all", this.render);
    // setInterval(this.refreshFeed.bind(this), 500);
  },

  template: JST["feeds/show"],

  events: {
    "click #refresh-button": "refreshFeed"
  },

  refreshFeed: function () {
    console.log("refreshing!")
    console.log(this.model.entries().length);
    var that = this;
    this.model.fetch()
  },

  render: function () {
    var renderedContent = this.template({
      feed: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
})