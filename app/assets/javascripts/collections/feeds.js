window.NewReader.Collections.Feeds = Backbone.Collection.extend({
  url: "/feeds",
  model: NewReader.Models.Feed

})

window.NewReader.Collections.feeds = new NewReader.Collections.Feeds();