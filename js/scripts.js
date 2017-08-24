// front-end logic
var nice_things = ["Veronica is beautiful!", "Veronica is full of wit", "Veronica is smarter than me."];

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

function generate() {
  var phrase = Math.floor(nice_things.length * Math.random());
  for (var i = 0; i <= nice_things.length; i++)
}


// back-end logic
$(document).ready(function() {
  $('#click').click(function(event)) {
    event.preventDefault();
    var message = generate(nice_things[i])
  });
