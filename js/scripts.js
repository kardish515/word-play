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


    var newArray = arrayOfStrings.filter(word => word.length > 3);
    newArray.reverse();
    var newSentence = newArray.join(" ");
    alert(newSentence);


    function sorter(arrayOfStrings) {
      var a = [], b = [], prev;

      arrayOfStrings.sort();
      for (var i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i] !== prev) {
        a.push(arrayOfStrings[i]);
        b.push(1);
      }
      else {
        b[b.length-1]++;
      }
      prev = arrayOfStrings[i];
      }

      return [a, b];
    }

    var result = sorter(arrayOfStrings);
    document.write('[' + result[0] + ']<br>[' + result[1] + ']')

    event.preventDefault();
  });
});
