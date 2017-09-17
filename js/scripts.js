function rndm() {
  var niceThings = ["Thing 1", "Thing 2", "Thing 3"]

  var niceThingsLength = niceThings.length -1
  var start = 0
  var i = Math.floor(Math.random() * (niceThingsLength - start)) * start;

  console.log(i)

  var output = niceThings[i];
  return output;
};

$(document)ready(function() {
//needs a button id...
  $(..button '#id'..).click(function(event) {
    event.preventDefault();

    var textToPrint = rndm();

//Needs a place to append to
    $("h3#test").append(textToPrint);
  })
})
