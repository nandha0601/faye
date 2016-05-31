$(function() {
  var faye = new Faye.Client('http://localhost:9292/faye');
  console.log("connected");
  faye.subscribe("/messages/new", function(data) {
    eval(data);
  });
});