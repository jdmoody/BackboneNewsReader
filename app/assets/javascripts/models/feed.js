window.NewReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/feeds",

  entries: function () {
    if(!this._entries) {
      this._entries = new NewReader.Collections.Entries([], {
        feed: this
      });
    }

    return this._entries
  },

  parse: function(response) {
    if (response.entries) {
      this.entries().set(response.entries);
      delete response.entries;
    }

    return response;
  }
});