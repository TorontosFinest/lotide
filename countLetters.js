const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion passed.${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`);
    }
  };


  function countLetters(sentence){
    let output = {};
    for (letter of sentence){
        if(letter !== " "){
        if(output[letter]){
            output[letter]+=1
        }else{
            output[letter]=1;
        }
    }
    }
    return output;
}