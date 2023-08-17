const uncommonCharacterCount = (s1, s2) => {
    var count = 0;
    for(let i in s1) {
        s2.includes(s1[i]) ? count++ : false;
    }
    return s1.length + s2.length - count*2;
  }
  
  console.log("Welcome to FLAMES Calculator");
  
  let name1 = prompt("Enter the First Person name: ");
  let name2 = prompt("Enter the Second Person name: ");
  
  let uncommonLetterCount = uncommonCharacterCount(name1.toLowerCase(), name2.toLowerCase());
  
  flamesWord = "FLAMES";
  
  while(flamesWord.length > 1) {
    // store that index value from
    // where we have to perform slicing.
    let split_index = (uncommonLetterCount % flamesWord.length) - 1;
  
    // this step is done for performing
    // anticlock-wise circular fashion counting
    if(split_index >= 0) {
      // list slicing
      let right = flamesWord.substring(split_index+1);
      let left = flamesWord.substring(0, split_index);
  
      // list concatenation
      flamesWord = right + left;
    } else {
      flamesWord = flamesWord.substring(0, flamesWord.length-1);
    }
  }
  
  const flamesCalculator = {
    'F': "Friendship",
    'L': "Love",
    'A': "Affection",
    'M': "Marriage",
    'E': "Enemy",
    'S': "Siblings"
  }
  
  console.log(name1 + " and " + name2 + " have relationship: "+ flamesCalculator[flamesWord[0]]);