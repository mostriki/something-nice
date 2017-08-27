// front-end logic


  var string = '';
  var possibleStrings = ["Veronica is beautiful!", "Veronica is full of wit", "Veronica is smarter than me."];

function niceStrings() {
  for (var i = 0; i <= possibleStrings.length; i++)
    string = Math.floor(Math.random() * possibleStrings.length);
    return string;
}
console.log(niceStrings());

// back-end logic
$(document).ready(function() {
  $('h3#message').click(function() {
    event.preventDefault();
    $('h3#message').text(niceStrings());
  });
});
