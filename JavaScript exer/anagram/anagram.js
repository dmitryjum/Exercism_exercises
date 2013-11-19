var Anagram = function(test_word) {
 
  this.match = function(array_of_words) { 
    // test_word is available here
    // enlist / listen
    // eilnst / eilnst
 
    function cleanWord(word) {
      return word.toLowerCase().replace(/\W/, "").split("").sort().join("");
    }
 
    var matches = [];
    array_of_words.forEach(function(current_word) { 
      if(cleanWord(test_word) === cleanWord(current_word) && current_word !== test_word) {
        matches.push(current_word);
      }
    });
    return matches;
  };
};
 
 
module.exports = Anagram;  
  