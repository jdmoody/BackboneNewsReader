window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new NewReader.Routers.NewRouter();
    Backbone.history.start({ trigger: true });
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
