//counting function
function countTotal(){
  var input = document.getElementById("input").value;
  var countWords = 0; //counting words
   for (var i = 0; i < input.length; i++) {
     if (input[i] === " ")
     countWords++;
     document.getElementById("words").innerHTML = countWords+1;
    }
  var countSentences = 0; //counting senctences
    for (var a = 0; a < input.length; a++) {
      if (input[a] === "." || input[a] === "?" || input[a] === "!")
      countSentences++;
      document.getElementById("sentences").innerHTML = countSentences;
    }
  var countSpaces = 0; //counting spaces
    for (var b = 0; b < input.length; b++) {
      if (input[b] === " ")
      countSpaces++;
      document.getElementById("spaces").innerHTML = countSpaces;
    }
  document.getElementById("average").innerHTML = Math.round((countWords+1)/countSentences);
}
