$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var arrayOfStrings = [];
    function splitString(stringToSplit, separator) {
      arrayOfStrings = stringToSplit.split(separator);
    }
    var sentence = $("input#sentence").val();
    var space = " ";
    splitString(sentence, space);
    alert(arrayOfStrings);
    var newArray = []; arrayOfStrings.forEach(function(string){
      if(string.length > 3)
        newArray.push(string);
    });
    newArray.reverse();
    var newSentence = newArray.join(" ");
    alert(newSentence);
    event.preventDefault();
  });
});
