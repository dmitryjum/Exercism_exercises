var Words = function(sentence) {
  //this.count = {"word" : 1};
  var word_array = sentence.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/);
  this.count = {};
  word_array.forEach(function(word) {
    if(this.count[word]) {
      this.count[word] = this.count[word] + 1;
    } else {
      this.count[word] = 1;
    }
  }, this);
  
};

module.exports = Words;