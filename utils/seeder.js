const mongoose = require("mongoose");

var options = { discriminatorKey: "kind" };

var eventSchema = new mongoose.Schema(
  { time: { type: Date, default: Date.now() } },options
);

var Event = mongoose.model("Event", eventSchema);

// ClickedLinkEvent is a special type of Event that has
// a URL.
var ClickedLinkEvent = Event.discriminator(
  "ClickedLink",
  new mongoose.Schema({ url: String })
);

var SignupEvent = Event.discriminator("signup",
new mongoose.Schema({username: String}));

// When you create a generic event, it can't have a URL field...
var genericEvent = new Event({ time: Date.now(), url: "google.com" });

var clickedEvent = new ClickedLinkEvent({
  time: Date.now(),
  url: "google.com"
});

var signupEvent = new SignupEvent({username: "yoloa"})

genericEvent.save(function(error,doc){console.log("tried to save generic event")});
clickedEvent.save(function(error,doc){console.log("tried to save clicked event")});
signupEvent.save(function(error,doc){console.log("tried to save signup event")});

console.log("saving models...")

