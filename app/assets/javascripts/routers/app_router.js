window.NewReader.Routers.NewRouter = Backbone.Router.extend({
  routes: {
    "": "feedIndex",
    "feeds/:id": "feedShow",
    "entries/:id": "entryShow"
  },

  entryShow: function(id) {
    var entry = new NewReader.Models.Entry({id: id});
    var entryView = new NewReader.Views.EntryView({
      model: entry
    });
    var that = this;
    entry.fetch({
      success: function() {
        that._swapView(entryView)
      }
    });
  },

  feedIndex: function () {
    var indexView = new NewReader.Views.FeedsIndexView({
      collection: NewReader.Collections.feeds
    });
    var that = this;
    NewReader.Collections.feeds.fetch({
      success: function () {
        that._swapView(indexView);
      }
    });
  },

  feedShow: function (id) {
    var feed = new NewReader.Models.Feed({id: id});
    var showView = new NewReader.Views.FeedView({
      model: feed
    })
    var that = this;
    feed.fetch({
      success: function () {
        that._swapView(showView);
      }
    })
  },

  _swapView: function(newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = newView;
    $("#content").html(newView.render().$el);
  }
})